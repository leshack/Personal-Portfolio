// read-more.js -------------------------------------------------Introtext----------------------------------------------------------------------

// Function to initialize the "Read more" functionality
function initializeReadMore() {
  // Get the paragraph element
  const paragraph = document.getElementById('introText');

  // Split the paragraph content by words
  const words = paragraph.textContent.split(' ');

  // Check if the number of words exceeds 66
  if (words.length > 66) {
    // Join the first 66 words and add '...' at the end
    const trimmedText = words.slice(0, 66).join(' ') + '...';

    // Get the existing span with class 'animate'
    const animateSpan = '<span class="animate" style="--i:4;"></span>';

    // Function to expand the paragraph on 'read more' click
    function expandText() {
      paragraph.innerHTML = words.join(' ') ;

      // Set timeout to collapse after 40 seconds (40000 milliseconds)
      setTimeout(function() {
        paragraph.innerHTML = trimmedText + ` <a href="#" id="readMoreLink">Read more</a>` + animateSpan;
        attachReadMoreListener(); // Reattach event listener after collapsing
      }, 40000); // 40000 milliseconds = 40 seconds
    }

    // Function to attach event listener to 'read more' link
    function attachReadMoreListener() {
      document.getElementById('readMoreLink').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        expandText(); // Expand text
      });
    }

    // Initially set the trimmed text and 'read more' link
    paragraph.innerHTML = trimmedText + ` <a href="#" id="readMoreLink">Read more</a>` + animateSpan;

    // Attach event listener to 'read more' link
    attachReadMoreListener();
  }
}

// Call the function to initialize "Read more" functionality
initializeReadMore();

//------------------------------------------------------------------------AboutmeReadMore---------------------------------------------------------------------------------------

// Function to initialize the "Read more" functionality
function initializeAboutReadMore() {
  // Get the paragraph element
  const paragraph = document.getElementById('aboutReadMore');
  const readMoreButton = document.getElementById('readMoreButton');

  // Split the paragraph content by words
  const words = paragraph.innerHTML.split(' ');

  // Get the existing span with class 'animate'
  const animateSpans = '<span class="animate scroll" style="--i:4;"></span>';


  // Function to collapse the text with added <br><br> tags
  function getTrimmedText() {
    return words.slice(0, 200).join(' ') + '...<br><br>' ;
    
  }

  // Check if the number of words exceeds 66
  if (words.length > 200) {
    // Get the trimmed text
    const trimmedText = getTrimmedText();

    // Function to expand the paragraph
    function expandText() {
      paragraph.innerHTML = words.join(' ')  ;

      // Set timeout to collapse after 40 seconds (40000 milliseconds)
      setTimeout(function() {
        paragraph.innerHTML = trimmedText + animateSpans  ;
        attachReadMoreListener(); // Reattach event listener after collapsing
      }, 40000); // 40000 milliseconds = 40 seconds
    }

    // Function to attach event listener to the "Read more" button
    function attachReadMoreListener() {
      readMoreButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        expandText(); // Expand text
      });
    }

    // Initially set the trimmed text
    paragraph.innerHTML = trimmedText + animateSpans  ;

    // Attach event listener to the "Read more" button
    attachReadMoreListener();
  }
}

// Call the function to initialize "Read more" functionality
initializeAboutReadMore();

//---------------------------------------------------------------------------CopyRightUpdateYear------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
  // Function to update the copyright year
  function updateCopyrightYear() {
      const currentYear = new Date().getFullYear();
      const yearSpan = document.getElementById('year');
      yearSpan.textContent = currentYear;
  }

  // Call the function to update the copyright year
  updateCopyrightYear();
});

//----------------------------------------------------------------------ReadMoreExperience----------------------------------------------------------------------------------------------------------


// Function to initialize the "Read more" functionality
function initializeExperienceReadMore() {
  // Get the paragraph element
  const paragraph = document.getElementById('ExperienceText');

  // Split the paragraph content by words
  const words = paragraph.textContent.split(' ');

  // Check if the number of words exceeds 66
  if (words.length > 120) {
    // Join the first 66 words and add '...' at the end
    const trimmedText = words.slice(0, 120).join(' ') + '...';

    // Get the existing span with class 'animate'
    const animateSpan = '<span class="animate" style="--i:6;"></span>';

    // Function to expand the paragraph on 'read more' click
    function expandText() {
      paragraph.innerHTML = words.join(' ') ;

      // Set timeout to collapse after 40 seconds (40000 milliseconds)
      setTimeout(function() {
        paragraph.innerHTML = trimmedText + ` <a href="#" id="readMoreLinkEx">Read more</a>` + animateSpan;
        attachReadMoreListener(); // Reattach event listener after collapsing
      }, 40000); // 40000 milliseconds = 40 seconds
    }

    // Function to attach event listener to 'read more' link
    function attachReadMoreListener() {
      document.getElementById('readMoreLinkEx').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        expandText(); // Expand text
      });
    }

    // Initially set the trimmed text and 'read more' link
    paragraph.innerHTML = trimmedText + ` <a href="#" id="readMoreLinkEx">Read more</a>` + animateSpan;

    // Attach event listener to 'read more' link
    attachReadMoreListener();
  }
}

// Call the function to initialize "Read more" functionality
initializeExperienceReadMore();

