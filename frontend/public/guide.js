// Guide detail page — reads guides.json, votes/views via localStorage (no backend)
let currentGuide = null;
let hasVoted = false;

function getGuideId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

async function fetchGuide() {
    const guideId = getGuideId();
    if (!guideId) {
        showError('No guide ID provided');
        return;
    }

    try {
        const response = await fetch('guides.json');
        if (!response.ok) throw new Error('Could not load guides');
        const data = await response.json();
        currentGuide = (data.guides || []).find(g => g.id === guideId);

        if (!currentGuide) throw new Error('Guide not found');

        incrementView(guideId);
        applyLocalVotes(guideId);
        displayGuide();
    } catch (error) {
        console.error('Error fetching guide:', error);
        showError('Guide not found');
    }
}

// Persist per-visitor view count in localStorage
function incrementView(guideId) {
    const key = `hackclub-views-${guideId}`;
    const extra = parseInt(localStorage.getItem(key) || '0', 10) + 1;
    localStorage.setItem(key, String(extra));
    currentGuide.views += extra;
}

// Reflect any helpful vote this visitor already cast
function applyLocalVotes(guideId) {
    const key = `hackclub-helpful-${guideId}`;
    if (localStorage.getItem(key) === '1') {
        hasVoted = true;
        currentGuide.helpful_votes += 1;
    }
}

function showError(message) {
    document.getElementById('loading').innerHTML = `
        <div style="text-align: center;">
            <h2 style="font-family: var(--font-heading); font-weight: 700; font-size: 24px; margin-bottom: 16px;">${message}</h2>
            <button class="btn btn-primary" onclick="window.location.href='browse.html'">Back to Browse</button>
        </div>
    `;
}

function toggleHelpful() {
    if (hasVoted) return;
    const guideId = getGuideId();
    localStorage.setItem(`hackclub-helpful-${guideId}`, '1');
    hasVoted = true;
    currentGuide.helpful_votes += 1;
    updateHelpfulButton();
}

function updateHelpfulButton() {
    const btn = document.getElementById('helpful-btn');
    if (hasVoted) {
        btn.classList.add('difficulty-beginner');
        btn.disabled = true;
        btn.innerHTML = `
            <i data-lucide="thumbs-up" style="fill: currentColor;"></i>
            Marked Helpful (${currentGuide.helpful_votes})
        `;
    } else {
        btn.innerHTML = `
            <i data-lucide="thumbs-up"></i>
            Helpful (${currentGuide.helpful_votes})
        `;
    }
    lucide.createIcons();
}

function displayGuide() {
    document.getElementById('loading').style.display = 'none';
    const container = document.getElementById('guide-content');
    container.style.display = 'block';

    const difficultyClass = currentGuide.difficulty.toLowerCase();

    container.innerHTML = `
        <div class="guide-header">
            <div class="guide-badges">
                <span class="guide-badge guide-badge-category">${currentGuide.category}</span>
                <span class="guide-badge difficulty-badge difficulty-${difficultyClass}">${currentGuide.difficulty}</span>
            </div>
            <h1 class="guide-page-title" data-testid="guide-title">${currentGuide.title}</h1>
            <p class="guide-page-description">${currentGuide.description}</p>
            <div class="guide-meta">
                <div class="guide-meta-item">
                    <i data-lucide="clock"></i>
                    <span>${currentGuide.setup_time}</span>
                </div>
                <div class="guide-meta-item">
                    <i data-lucide="eye"></i>
                    <span>${currentGuide.views} views</span>
                </div>
                <button
                    id="helpful-btn"
                    class="btn btn-outline"
                    data-testid="helpful-button"
                    onclick="toggleHelpful()"
                    style="padding: 8px 16px; font-size: 14px;"
                >
                    <i data-lucide="thumbs-up"></i>
                    Helpful (${currentGuide.helpful_votes})
                </button>
            </div>
            ${currentGuide.api_keys_needed && currentGuide.api_keys_needed.length > 0 ? `
                <div class="api-keys-box">
                    <h3 class="api-keys-title">Required API Keys:</h3>
                    <ul class="api-keys-list">
                        ${currentGuide.api_keys_needed.map(key => `
                            <li>
                                <span class="api-key-dot"></span>
                                <span class="api-key-name">${key}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            ` : ''}
            ${currentGuide.tags && currentGuide.tags.length > 0 ? `
                <div class="guide-tags" style="margin-top: 24px;">
                    ${currentGuide.tags.map(tag => `<span class="guide-tag">#${tag}</span>`).join('')}
                </div>
            ` : ''}
        </div>

        <div class="guide-content" data-testid="guide-content">${escapeHtml(currentGuide.content)}</div>

        ${currentGuide.code_snippets && currentGuide.code_snippets.length > 0 ? `
            <div class="code-examples">
                <h2 style="font-family: var(--font-heading); font-weight: 700; font-size: 24px; margin-bottom: 24px;">Code Examples</h2>
                ${currentGuide.code_snippets.map((snippet, index) => renderCodeSnippet(snippet, index)).join('')}
            </div>
        ` : ''}

        <div class="guide-cta">
            <h3 class="guide-cta-title">Found this helpful?</h3>
            <p class="guide-cta-text">Check out more integration guides to supercharge your projects.</p>
            <button class="btn btn-primary btn-rounded" onclick="window.location.href='browse.html'">Browse More Guides</button>
        </div>
    `;

    lucide.createIcons();
    if (window.Prism) Prism.highlightAll();

    // Reflect persisted vote state (disabled + "Marked Helpful" label)
    if (hasVoted) updateHelpfulButton();
}

function renderCodeSnippet(snippet, index) {
    return `
        <div class="code-block-wrapper">
            <div class="code-block-header">
                <div class="code-block-info">
                    <span class="code-language">${snippet.language}</span>
                    ${snippet.filename ? `<span class="code-filename">${snippet.filename}</span>` : ''}
                </div>
                <button class="copy-code-btn" data-testid="copy-code-${index}" onclick="copyCode(${index})">
                    <i data-lucide="copy" id="copy-icon-${index}"></i>
                    <i data-lucide="check" id="check-icon-${index}" style="display: none;"></i>
                    <span id="copy-text-${index}">Copy</span>
                </button>
            </div>
            <pre><code class="language-${snippet.language}">${escapeHtml(snippet.code)}</code></pre>
        </div>
    `;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function copyCode(index) {
    const code = currentGuide.code_snippets[index].code;
    navigator.clipboard.writeText(code).then(() => {
        const copyIcon = document.getElementById(`copy-icon-${index}`);
        const checkIcon = document.getElementById(`check-icon-${index}`);
        const copyText = document.getElementById(`copy-text-${index}`);

        copyIcon.style.display = 'none';
        checkIcon.style.display = 'inline';
        copyText.textContent = 'Copied!';

        setTimeout(() => {
            copyIcon.style.display = 'inline';
            checkIcon.style.display = 'none';
            copyText.textContent = 'Copy';
            lucide.createIcons();
        }, 2000);
    });
}

fetchGuide();