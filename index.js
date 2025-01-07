
const contactUsLink = document.getElementById('contact');

contactUsLink.addEventListener('click', (event) => {
  event.preventDefault();
  
  
  const queryFormHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Query Form</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          padding: 20px;
          margin: 0;
          background-color:rgb(187, 195, 188);

        }
        form {
          max-width: 400px;
          margin: 0 auto;
       
        }
        label {
          display: block;
          margin-top: 10px;
        }
        input, textarea {
          width: 100%;
          padding: 10px;
          margin-top: 5px;
        }
        button {
          margin-top: 15px;
          padding: 10px 20px;
          background-color: #007BFF;
          color: #fff;
          border: none;
          cursor: pointer;
        }
        button:hover {
          background-color: #0056b3;
        }
      </style>
    </head>
    <body>
      <h2>Query Form</h2>
      <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br>
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea><br>
        <button type="submit">Submit</button>
      </form>
    </body>
    </html>
  `;


  const queryFormWindow = window.open('', '_blank', 'width=2000,height=1000');
  queryFormWindow.document.write(queryFormHTML);
  queryFormWindow.document.close();
});

const directoryLink = document.getElementById('directory');


directoryLink.addEventListener('click', (event) => {
  event.preventDefault();
  
  
  const queryFormHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Query Form</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          background-color:rgb(234, 233, 230);
        }
          h2{
          color:rgb(3, 3, 3);
          font-size: 35px;
          }
       p{
          color:rgb(59, 49, 49);
          font-size:27px;
          }
       
      </style>
    </head>
    <body>
    <h2>Indian Institute of Technology Roorkee (IIT Roorkee)</h2>
     <p>Indian Institute of Technology Roorkee (IIT Roorkee) is one of India’s premier institutions for engineering, science, and technology education. Founded in 1847 as the Thomason College of Civil Engineering, it is the oldest technical institution in Asia and gained the prestigious IIT status in 2001. Located in the serene town of Roorkee in Uttarakhand, the institute boasts a rich legacy of academic excellence and innovation.
IIT Roorkee offers undergraduate, postgraduate, and doctoral programs across diverse disciplines, including engineering, management, applied sciences, and humanities. The institution is renowned for its cutting-edge research facilities, state-of-the-art infrastructure, and vibrant campus life. Its emphasis on fostering innovation, entrepreneurship, and interdisciplinary learning has placed it among the top engineering institutions in India and globally.
With a sprawling 365-acre campus, IIT Roorkee houses 23 academic departments, several specialized research centers, and over 11,000 students from across the country and the world. The campus is equipped with world-class laboratories, libraries, and computing facilities, promoting an environment conducive to academic and professional growth.
IIT Roorkee's alumni network includes distinguished scientists, entrepreneurs, bureaucrats, and industry leaders who have significantly contributed to technological advancement and nation-building. The institute’s focus on real-world problem-solving and industry collaboration ensures its graduates are well-prepared for global challenges.
The institute is also known for its active cultural, technical, and sports activities. Events like Thomso (cultural fest) and Cognizance (technical fest) showcase students’ talents and creativity. Moreover, initiatives like the TIDES Business Incubator support startups and innovation.
As a hub of knowledge and discovery, IIT Roorkee continues to uphold its tradition of excellence while paving the way for future innovations and societal .
</p>
    </body>
    </html>
  `;

  
  const queryFormWindow = window.open('', '_blank', 'width=2000,height=1000');
  queryFormWindow.document.write(queryFormHTML);
  queryFormWindow.document.close();
});
