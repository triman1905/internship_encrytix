document.addEventListener('DOMContentLoaded', () => {
    // Popup functionality
    const popup = document.getElementById('popup');
    const closeButton = document.getElementById('close-btn');

    // Function to show the popup
    const showPopup = () => {
        popup.style.display = 'flex'; // Make the popup visible
        setTimeout(() => {
            popup.style.opacity = '1'; // Fade in effect
        }, 10); // Short delay to trigger opacity transition
    };

    // Function to close the popup
    const closePopup = () => {
        popup.style.opacity = '0'; // Fade out effect
        setTimeout(() => {
            popup.style.display = 'none'; // Hide the popup
        }, 500); // Match with CSS transition duration
    };

    // Close the popup when the button is clicked
    closeButton.addEventListener('click', closePopup);

    // Optionally, close the popup when clicking outside of the content
    popup.addEventListener('click', (event) => {
        if (event.target === popup) {
            closePopup();
        }
    });

    // Show the popup when the page loads
    showPopup();

    // Menu toggle functionality
    let menu = document.querySelector('#menu-btn');
    let navbar = document.querySelector('.navbar');

    menu.addEventListener('click', () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('nav-toggle');
    });

    window.onscroll = () => {
        menu.classList.remove('fa-times');
        navbar.classList.remove('nav-toggle');
    };

    // Count-up animation functionality using jQuery
    $(document).ready(function () {
        $('.count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3500,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now) + '+')
                }
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const goToPage2Button = document.getElementById('goToPage2');
    const goToHomeButton = document.getElementById('goToHome');

    if (goToPage2Button) {
        goToPage2Button.addEventListener('click', () => {
            window.location.href = 'timeline.html'; // Redirect to page2.html
        });
    }

    if (goToHomeButton) {
        goToHomeButton.addEventListener('click', () => {
            window.location.href = 'index.html'; // Redirect to index.html
        });
    }
});

