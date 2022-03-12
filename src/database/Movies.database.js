const MOVIES_DATA = [
  {
    _id: "1",
    title: "A bout de Souffle",
    genre: "French New Wave",
    rating: "5",
    seen: "yes",
    imageUrl:
      "https://ih1.redbubble.net/image.1208860806.0913/flat,128x,075,f-pad,128x128,f8f8f8.jpg",
    like: true,
  },
  {
    _id: "2",
    title: "Titanic",
    genre: "Drama",
    rating: "5",
    seen: "yes",
    like: false,
    imageUrl:
      "https://i.guim.co.uk/img/static/sys-images/Film/Pix/pictures/2001/05/25/titanic1.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=27ee0c1e6c9abb0db599fcc21b4603b7",
  },
  {
    _id: "3",
    title: "Die Hard",
    genre: "Action",
    rating: "2",
    seen: "yes",
    like: false,
    imageUrl:
      "https://ih1.redbubble.net/image.469378407.2016/flat,128x,075,f-pad,128x128,f8f8f8.u3.jpg",
  },
  {
    _id: "4",
    title: "Get Out",
    genre: "Horror",
    rating: "5",
    seen: "yes",
    like: false,
    imageUrl: "https://64.media.tumblr.com/avatar_d6dae6e19fd9_128.pnj",
  },
  {
    _id: "5",
    title: "Dark Sky",
    genre: "French New Wave",
    rating: "5",
    seen: "yes",
    like: false,
    imageUrl:
      "https://cdn131.picsart.com/349893440082201.jpg?type=webp&to=crop&r=128",
  },
];

export default MOVIES_DATA;

export function saveMovie(movie) {
  let addMovie = { ...movie };
  addMovie._id = Date.now().toString();
  MOVIES_DATA.push(addMovie);
}
