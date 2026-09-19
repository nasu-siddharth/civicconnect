/**
 * CivicConnect – Public Issue Reporting
 * Frontend Developer Intern Assignment
 * Vanilla JavaScript: Navigation, Form Validation, Photo Upload & State
 */

document.addEventListener("DOMContentLoaded", () => {
  // =========================================================================
  // 1. Mobile Navigation Toggle
  // =========================================================================
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link, .nav-action-link");

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("is-open");
      hamburgerBtn.classList.toggle("is-active", isOpen);
      hamburgerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close menu when clicking any navigation link
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("is-open");
        hamburgerBtn.classList.remove("is-active");
        hamburgerBtn.setAttribute("aria-expanded", "false");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
      if (
        !navMenu.contains(event.target) &&
        !hamburgerBtn.contains(event.target) &&
        navMenu.classList.contains("is-open")
      ) {
        navMenu.classList.remove("is-open");
        hamburgerBtn.classList.remove("is-active");
        hamburgerBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // =========================================================================
  // 2. Smooth Scrolling with Fixed Navbar Offset
  // =========================================================================
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  const navHeight = 72; // Height of sticky navbar

  scrollLinks.forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId !== "#") {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // =========================================================================
  // 3. Photo Upload with Live Thumbnail Preview
  // =========================================================================
  const photoInput = document.getElementById("problem-photo");
  const photoPreview = document.getElementById("file-preview");
  const previewImg = document.getElementById("preview-img");
  const previewName = document.getElementById("preview-name");
  const removePhotoBtn = document.getElementById("remove-photo-btn");
  const uploadContent = document.getElementById("upload-content");

  if (photoInput) {
    photoInput.addEventListener("change", function () {
      const file = this.files && this.files[0];
      if (file) {
        // Validate file type
        if (!file.type.startsWith("image/")) {
          alert("Please upload a valid image file (PNG, JPG, JPEG, WEBP).");
          this.value = "";
          return;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
          if (previewImg && previewName && photoPreview) {
            previewImg.src = e.target.result;
            previewName.textContent = file.name;
            photoPreview.style.display = "flex";
            if (uploadContent) {
              uploadContent.style.display = "none";
            }
          }
        };
        reader.readAsDataURL(file);
      }
    });

    if (removePhotoBtn) {
      removePhotoBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        photoInput.value = "";
        if (photoPreview) photoPreview.style.display = "none";
        if (uploadContent) uploadContent.style.display = "flex";
        if (previewImg) previewImg.src = "";
      });
    }
  }

  // =========================================================================
  // 4. Form Validation & Issue Submission (Client-side Only)
  // =========================================================================
  const reportForm = document.getElementById("report-form");
  const formSuccess = document.getElementById("form-success");
  const issueIdDisplay = document.getElementById("generated-issue-id");
  const resetFormBtn = document.getElementById("report-another-btn");

  // Success summary elements
  const summaryTitle = document.getElementById("summary-title");
  const summaryCategory = document.getElementById("summary-category");
  const summaryLocation = document.getElementById("summary-location");
  const summaryTime = document.getElementById("summary-time");

  // Form input fields
  const titleInput = document.getElementById("problem-title");
  const categorySelect = document.getElementById("problem-category");
  const descInput = document.getElementById("problem-desc");
  const locationInput = document.getElementById("problem-location");

  // Helper to clear error state on an input
  const clearError = (input) => {
    const formGroup = input.closest(".form-group");
    if (formGroup) {
      formGroup.classList.remove("has-error");
    }
  };

  // Helper to trigger error state on an input
  const setError = (input, message) => {
    const formGroup = input.closest(".form-group");
    if (formGroup) {
      formGroup.classList.add("has-error");
      const errorMsg = formGroup.querySelector(".form-error-msg");
      if (errorMsg && message) {
        errorMsg.textContent = message;
      }
    }
  };

  // Clear errors when the user types or changes input
  [titleInput, categorySelect, descInput, locationInput].forEach((input) => {
    if (input) {
      input.addEventListener("input", () => clearError(input));
      input.addEventListener("change", () => clearError(input));
    }
  });

  if (reportForm) {
    reportForm.addEventListener("submit", (e) => {
      e.preventDefault();

      let isValid = true;
      let firstInvalidInput = null;

      // Validate Title
      const titleValue = titleInput ? titleInput.value.trim() : "";
      if (!titleValue || titleValue.length < 3) {
        setError(titleInput, "Please enter a descriptive title (at least 3 characters).");
        isValid = false;
        if (!firstInvalidInput) firstInvalidInput = titleInput;
      } else {
        clearError(titleInput);
      }

      // Validate Category
      const categoryValue = categorySelect ? categorySelect.value : "";
      if (!categoryValue) {
        setError(categorySelect, "Please select a problem category.");
        isValid = false;
        if (!firstInvalidInput) firstInvalidInput = categorySelect;
      } else {
        clearError(categorySelect);
      }

      // Validate Description
      const descValue = descInput ? descInput.value.trim() : "";
      if (!descValue || descValue.length < 10) {
        setError(descInput, "Please provide a short description (at least 10 characters).");
        isValid = false;
        if (!firstInvalidInput) firstInvalidInput = descInput;
      } else {
        clearError(descInput);
      }

      // Validate Location
      const locationValue = locationInput ? locationInput.value.trim() : "";
      if (!locationValue) {
        setError(locationInput, "Please specify the area, street, or landmark.");
        isValid = false;
        if (!firstInvalidInput) firstInvalidInput = locationInput;
      } else {
        clearError(locationInput);
      }

      // If invalid, focus first problematic input
      if (!isValid) {
        if (firstInvalidInput) {
          firstInvalidInput.focus();
        }
        return;
      }

      // Generate a realistic sample issue ID (e.g. CC-1024 or random 4 digits)
      const randomDigits = Math.floor(1000 + Math.random() * 9000);
      const generatedIssueId = `CC-${randomDigits}`;

      // Populate success card details
      if (issueIdDisplay) {
        issueIdDisplay.textContent = generatedIssueId;
      }
      if (summaryTitle) {
        summaryTitle.textContent = titleValue;
      }
      if (summaryCategory && categorySelect) {
        const selectedText = categorySelect.options[categorySelect.selectedIndex].text;
        summaryCategory.textContent = selectedText;
      }
      if (summaryLocation) {
        summaryLocation.textContent = locationValue;
      }
      if (summaryTime) {
        const now = new Date();
        summaryTime.textContent = now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
      }

      // Hide form and display success card smoothly
      reportForm.style.display = "none";
      if (formSuccess) {
        formSuccess.style.display = "block";
      }

      // Scroll smoothly to success message
      const reportSection = document.getElementById("report");
      if (reportSection) {
        const topPos = reportSection.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({
          top: topPos,
          behavior: "smooth",
        });
      }
    });
  }

  // Handle "Report Another Issue" button
  if (resetFormBtn) {
    resetFormBtn.addEventListener("click", () => {
      if (reportForm) {
        reportForm.reset();
        // Clear photo preview
        if (photoPreview) photoPreview.style.display = "none";
        if (uploadContent) uploadContent.style.display = "flex";
        if (previewImg) previewImg.src = "";

        // Reset error classes
        [titleInput, categorySelect, descInput, locationInput].forEach((input) => {
          if (input) clearError(input);
        });

        // Toggle back to form view
        reportForm.style.display = "flex";
      }
      if (formSuccess) {
        formSuccess.style.display = "none";
      }

      // Focus back to first input
      if (titleInput) {
        titleInput.focus();
      }
    });
  }
});
