document.addEventListener('DOMContentLoaded', () => {
    const fileTree = document.getElementById('fileTree');
    const markdownContent = document.getElementById('markdown-content');
    const pageNavigation = document.getElementById('pageNavigation');
    const searchInput = document.getElementById('search');

    // File tree data structure
    const fileTreeData = {
        'Knowledge': {
            'Amendments Guidelines': 'Knowledge/Amendments Guidelines.pdf',
            'Common Mistakes': 'Knowledge/CommonMistakes.pdf',
            'Debate Strategies': 'Knowledge/DebateStrategies.pdf',
            'Formal Debate': 'Knowledge/FormalDebate.pdf',
            'Opening Speech': 'Knowledge/Opening Speech.pdf',
            'Position Paper Guide': 'Knowledge/PositionPaperEnglishGuide.pdf',
            'Resolution Guidelines': 'Knowledge/Resolution Guidelines.pdf'
        },
        'Templates': {
            'Amendment Template': 'Templates and Preparation/AmendmentTemplate2.0 FINAL USE.docx',
            'Opening Speech Template': 'Templates and Preparation/Template [Opening Speech] FINAL USE.docx',
            'Resolution Template': 'Templates and Preparation/Templates(Edited) Reso+Amend FINAL USE.docx'
        },
        'Resources': {
            'ECOFIN': {
                'Topic 1': 'Scimun.net/ECOFIN BAR T1.pdf',
                'Topic 2': 'Scimun.net/ECOFIN BAR T2.pdf'
            },
            'G20': {
                'Topic 1': 'Scimun.net/G20 BAR T1.pdf',
                'Topic 2': 'Scimun.net/G20 BAR T2.pdf'
            },
            'HRC': {
                'Topic 1': 'Scimun.net/HRC BAR T1.pdf',
                'Topic 2': 'Scimun.net/HRC BAR T2.pdf'
            }
        }
    };

    // Build file tree HTML
    function buildFileTree(data, parent = fileTree) {
        const ul = document.createElement('ul');
        
        Object.entries(data).forEach(([key, value]) => {
            const li = document.createElement('li');
            
            if (typeof value === 'object') {
                li.innerHTML = `<span class="folder">${key}</span>`;
                buildFileTree(value, li);
            } else {
                li.innerHTML = `<a href="#" data-path="${value}">${key}</a>`;
                li.querySelector('a').addEventListener('click', (e) => {
                    e.preventDefault();
                    loadContent(value);
                });
            }
            
            ul.appendChild(li);
        });
        
        parent.appendChild(ul);
    }

    // Load content
    async function loadContent(path) {
        try {
            const response = await fetch(path);
            const content = await response.text();
            
            if (path.endsWith('.md')) {
                markdownContent.innerHTML = marked.parse(content);
                updatePageNavigation();
            } else {
                markdownContent.innerHTML = `<div class="pdf-viewer"><iframe src="${path}"></iframe></div>`;
            }
        } catch (error) {
            console.error('Error loading content:', error);
            markdownContent.innerHTML = '<p>Error loading content. Please try again.</p>';
        }
    }

    // Update page navigation
    function updatePageNavigation() {
        const headings = markdownContent.querySelectorAll('h1, h2, h3');
        pageNavigation.innerHTML = '';
        
        headings.forEach(heading => {
            const link = document.createElement('a');
            link.textContent = heading.textContent;
            link.href = `#${heading.id}`;
            link.style.paddingLeft = `${(heading.tagName[1] - 1) * 15}px`;
            
            link.addEventListener('click', (e) => {
                e.preventDefault();
                heading.scrollIntoView({ behavior: 'smooth' });
            });
            
            pageNavigation.appendChild(link);
        });
    }

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const links = fileTree.querySelectorAll('a');
        
        links.forEach(link => {
            const text = link.textContent.toLowerCase();
            const parent = link.closest('li');
            
            if (text.includes(searchTerm)) {
                parent.style.display = '';
                let current = parent;
                while (current.parentElement) {
                    current = current.parentElement.closest('li');
                    if (current) current.style.display = '';
                }
            } else {
                parent.style.display = 'none';
            }
        });
    });

    // Initialize
    buildFileTree(fileTreeData);

    // Keyboard shortcut for search
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
    });
});