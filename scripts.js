document.addEventListener("DOMContentLoaded", function () {
    const events = [
        
        { date: "2024-08-29", type: "practice", title: "Outdoor Practice" },
        { date: "2024-09-02", type: "practice", title: "Outdoor Practice" },
        { date: "2024-09-08", type: "fundraiser", title: "Exec Browns Fundraiser" },
        { date: "2024-09-05", type: "practice", title: "Outdoor Practice" },
        { date: "2024-09-09", type: "practice", title: "Outdoor Practice" },
        { date: "2024-09-12", type: "practice", title: "Outdoor Practice" },
        { date: "2024-09-14", type: "tournament", title: "CSU/CWRU Tournament" },
        { date: "2024-09-15", type: "tournament", title: "CSU/CWRU Tournament" },
        { date: "2024-09-16", type: "practice", title: "Outdoor Practice" },
        { date: "2024-09-19", type: "practice", title: "Outdoor Practice" },
        { date: "2024-09-21", type: "tournament", title: "Florida Clay Court Invitationals" },
        { date: "2024-09-22", type: "tournament", title: "Florida Clay Court Invitationals" },
        { date: "2024-09-23", type: "practice", title: "Outdoor Practice" },
        { date: "2024-09-26", type: "practice", title: "Outdoor Practice" },
        { date: "2024-09-30", type: "practice", title: "Outdoor Practice" },
        { date: "2024-10-03", type: "practice", title: "Outdoor Practice" },
        { date: "2024-10-04", type: "tournament", title: "Toledo Clay Court Tournament" },
        { date: "2024-10-05", type: "tournament", title: "Toledo Clay Court Tournament" },
        { date: "2024-10-06", type: "tournament", title: "Toledo Clay Court Tournament" },
        { date: "2024-10-07", type: "practice", title: "Outdoor Practice" },
        { date: "2024-10-10", type: "practice", title: "Outdoor Practice" },
        { date: "2024-10-12", type: "tournament", title: "Dayton Tournament" },
        { date: "2024-10-13", type: "tournament", title: "Dayton Tournament" },
        { date: "2024-10-14", type: "practice", title: "Outdoor Practice" },
        { date: "2024-10-17", type: "practice", title: "Outdoor Practice" },
        { date: "2024-10-21", type: "practice", title: "Outdoor Practice" },
        { date: "2024-10-24", type: "practice", title: "Outdoor Practice" },
        { date: "2024-10-28", type: "practice", title: "Outdoor Practice" },
        { date: "2024-10-31", type: "practice", title: "Outdoor Practice" }
        // Add more events here...
    ];

    const months = [
        "August", "September", "October", "November", "December"
    ];

    const monthIndexes = [7, 8, 9, 10, 11]; // August to December (0-indexed)
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const calendarContainer = document.getElementById("calendar");

    // Generate the calendar
    monthIndexes.forEach((monthIndex, i) => {
        const monthDiv = document.createElement("div");
        monthDiv.classList.add("month");

        const monthHeader = document.createElement("h3");
        monthHeader.textContent = months[i];
        monthDiv.appendChild(monthHeader);

        const table = document.createElement("table");
        table.classList.add("month-table");

        const thead = document.createElement("thead");
        const tr = document.createElement("tr");
        daysOfWeek.forEach(day => {
            const th = document.createElement("th");
            th.textContent = day;
            tr.appendChild(th);
        });
        thead.appendChild(tr);
        table.appendChild(thead);

        const tbody = document.createElement("tbody");
        const firstDay = new Date(2024, monthIndex, 1).getDay();
        const daysInMonth = new Date(2024, monthIndex + 1, 0).getDate();

        let trBody = document.createElement("tr");
        for (let i = 0; i < firstDay; i++) {
            trBody.appendChild(document.createElement("td"));
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const td = document.createElement("td");
            td.textContent = day;

            const dateStr = `2024-${(monthIndex + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
            const event = events.find(e => e.date === dateStr);

            if (event) {
                td.classList.add("event", event.type);
                td.addEventListener("click", function () {
                    showEventDetails(event.title);
                });
            }

            trBody.appendChild(td);
            if ((firstDay + day) % 7 === 0) {
                tbody.appendChild(trBody);
                trBody = document.createElement("tr");
            }
        }
        tbody.appendChild(trBody);
        table.appendChild(tbody);
        monthDiv.appendChild(table);
        calendarContainer.appendChild(monthDiv);
    });

    // Modal functionality
    const modal = document.getElementById("event-modal");
    const modalContent = document.getElementById("event-details");
    const closeBtn = document.querySelector(".close");

    function showEventDetails(eventTitle) {
        modalContent.textContent = eventTitle;
        modal.style.display = "flex";
    }

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'IMG_1357.jpeg',
        'IMG_1668.jpg',
        'IMG_2131.jpg',
        'IMG_3814.jpg',
        'IMG_3889.jpg',
        'IMG_3906.jpg',
        'IMG_4005.jpg',
        'IMG_4104.jpg',
        'IMG_4159.jpg',
        'IMG_4826.jpg',
        'IMG_5029.jpg',
        'IMG_5056.jpg',
        'IMG_8017.jpg',
        'IMG_8739_Original.jpg'
    ];
    let currentImageIndex = 0;
    const heroElement = document.getElementById('hero');

    const changeHeroImage = () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        heroElement.style.backgroundImage = `url('${images[currentImageIndex]}')`;
        heroElement.style.backgroundSize = 'cover';
        heroElement.style.backgroundPosition = 'center';
    };

    setInterval(changeHeroImage, 2000); // Change image every 2 seconds
    changeHeroImage(); // Initial call to set the first image


    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        const slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 4000); // Change image every 4 seconds
    }
});
// Get the modal
var modal = document.getElementById("image-modal");

// Get the modal image element
var modalImg = document.getElementById("modal-img");

// Get the close button
var closeBtn = document.querySelector(".close");

// Get all images in the gallery
var images = document.querySelectorAll(".photo-card img");

// Add click event listeners to each image to open the modal
images.forEach(function (image) {
    image.addEventListener("click", function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
    });
});

// Add event listener to close button to close the modal
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

// Close the modal when clicking outside of the modal content
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


