//fetch compliments
async function fetchCompliments(){
  try {
    const response = await fetch('./data/compliments.json');
    if (!response.ok) throw new Error('O no, json file cannot be found');
    const data = await response.json();
    console.log(response, data);
  } catch (error) {
      
  } finally {

  }
};

//main function IIFE
(async()=>{
    const compliments = await fetchCompliments();
    const button = document.getElementById('compliment-button');
    button.addEventListener('click', () => displayRandomCompliment(compliments))
})();