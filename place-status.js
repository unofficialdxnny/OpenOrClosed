const apiKey = 'YOUR_API_KEY';
const placeName = 'Googleplex';

fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${placeName}&inputtype=textquery&fields=opening_hours&key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    const openingHours = data.candidates[0].opening_hours;
    const isOpenNow = openingHours && openingHours.open_now;

    const heading = document.querySelector('h1');
    heading.textContent = isOpenNow ? 'Open' : 'Closed';
  });
