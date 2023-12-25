const imageURL = 'https://recsports.ufl.edu/cam/cam8.jpg';

const proxyURL = 'https://cors-anywhere.herokuapp.com/' + imageURL;

app.fetch(imageURL)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return response.blob();
    })
    .then(blob => {
        const imgUrl = URL.createObjectURL(blob);
        const imgElement = document.createElement('sw_img');
        imgElement.src = imgUrl;
        document.body.appendChild(imgElement);
    })
    .catch(error => {
        console.error('Error fetching the image: ', error);
    });