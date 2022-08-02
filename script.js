let room = {
    number: 23
  };
  
  let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
  };
  
  // цикличные ссылки
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  // цикличные ссылки

  
  console.log( JSON.stringify(meetup, function replacer(key, value) {

    if(key == '' && value == meetup) return value

    return (key !== '' && value == meetup)? undefined : value;
  }))