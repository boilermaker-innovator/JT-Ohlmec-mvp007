document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        
        // Deactivate all tabs
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        
        // Activate the clicked tab
        button.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

document.getElementById('generateTeaser').addEventListener('click', () => {
    const jobTitle = document.getElementById('jobTitle').value;
    const companyName = document.getElementById('companyName').value;
    const location = document.getElementById('location').value;
    const about = document.getElementById('jobDescription').value;
    const responsibilities = document.getElementById('responsibilities').value;
    const requirements = document.getElementById('requirements').value;
    const benefits = document.getElementById('benefits').value;

    const teaserHTML = `
        <div class="job-teaser">
            <h2>${jobTitle} at ${companyName}</h2>
            <p>Location: ${location}</p>
            <div class="tabs">
                <button class="tab-button active" onclick="openTab(event, 'teaser-about')">About</button>
                <button class="tab-button" onclick="openTab(event, 'teaser-responsibilities')">Responsibilities</button>
                <button class="tab-button" onclick="openTab(event, 'teaser-requirements')">Requirements</button>
                <button class="tab-button" onclick="openTab(event, 'teaser-benefits')">Benefits</button>
            </div>
            <div id="teaser-about" class="tab-content active"><p>${about}</p></div>
            <div id="teaser-responsibilities" class="tab-content"><p>${responsibilities}</p></div>
            <div id="teaser-requirements" class="tab-content"><p>${requirements}</p></div>
            <div id="teaser-benefits" class="tab-content"><p>${benefits}</p></div>
        </div>
        <script>
            function openTab(evt, tabName) {
                var i, tabContent, tabButtons;
                tabContent = document.getElementsByClassName("tab-content");
                for (i = 0; i < tabContent.length; i++) {
                    tabContent[i].style.display = "none";
                }
                tabButtons = document.getElementsByClassName("tab-button");
                for (i = 0; i < tabButtons.length; i++) {
                    tabButtons[i].className = tabButtons[i].className.replace(" active", "");
                }
                document.getElementById(tabName).style.display = "block";
                evt.currentTarget.className += " active";
            }
        </script>
    `;

    document.getElementById('preview').innerHTML = teaserHTML;
});
