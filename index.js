const freelancers = [
    { name: 'Alice', occupation: 'Writer', price: 40 },
    { name: 'Bob', occupation: 'Designer', price: 60 }
  ];
  
  
  function updateAveragePrice() {
    const prices = freelancers.map(freelancer => freelancer.price);
    const total = prices.reduce((sum, price) => sum + price, 0);
    const average = total / freelancers.length;
    document.getElementById('averageStartingPrice').innerText = average.toFixed(2);
  }
  
  function addFreelancer() {
    const name = prompt('Enter freelancer name:');
    const occupation = prompt('Enter freelancer occupation:');
    const price = parseFloat(prompt('Enter freelancer starting price:'));
  
    if (name && occupation && !isNaN(price)) {
      freelancers.push({ name, occupation, price });
      const freelancerDiv = document.createElement('div');
      freelancerDiv.className = 'freelancer';
      freelancerDiv.innerHTML = `<span>${name}</span><span>${occupation}</span><span>$${price}</span>`;
      document.querySelector('.table').appendChild(freelancerDiv);
      updateAveragePrice();
  }
  
  updateAveragePrice();
}
  