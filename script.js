//fetch compliments from json file
async function fetchCompliments(){
  try {
    const response = await fetch('./data/compliments.json');
    if (!response.ok) throw new Error('O no, json file cannot be found'); //json file cannot be found
    const data = await response.json();
    //console.log(response, data);
    return data.compliments;
  } catch (error) {
      console.error('Problem happened during loading:', error);
      return ['An error has occured', 'Please try again later']; //standaard messages when error occures
  } finally {
    console.log('Fetch completed');
  }
};

//Display random compliment
function displayRandomCompliment(compliments){
    console.log('My compliments, Yipee', compliments);
}
//Main function
(async()=>{
    const compliments = await fetchCompliments();
    const button = document.getElementById('compliment-button');
    button.addEventListener('click', () => displayRandomCompliment(compliments));
})();