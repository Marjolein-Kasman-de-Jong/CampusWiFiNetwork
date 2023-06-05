// --------------------------------------------------------------------------------
// Codecademy Front-End Engineer Career Path - Challenge: Campus Wi-Fi Network
// --------------------------------------------------------------------------------

// Network class

class Network {
  constructor(data, users) {
    this.data = data;
    this.users = users;
  }

  // Returns true if there is enough data to watch a movie, false if there isn't 

  movieTime() {
    const usedData = this.users * 5;
    const remainingData = this.data - usedData;
    if (remainingData >= 10) {
      return true;
    }
    else {
      return false;
    }
  }
}

// Creates instance of Network

const library = new Network(50, 9) 

// Calls movieTime() on library

library.movieTime();