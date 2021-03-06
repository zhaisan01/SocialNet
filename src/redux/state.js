import { rerenderTree } from "../render";

let state = {
  profilePage: {
    post: [
      // {
      //   imgUrl:
      //     "https://cdnb.artstation.com/p/assets/images/images/017/445/619/large/zvvvz-z-o-88d0b67c8c.jpg?1556026624",
      //   id: 1,
      //   text: "hi everybody",
      //   llikes: 12,
      // },
      // {
      //   id: 2,
      //   text: "it my first blog",
      //   llikes: 12,
      // },
      // {
      //   id: 3,
      //   text: "have a good day",
      //   llikes: 12,
      // },
      // {
      //   id: 4,
      //   text: "textPost",
      //   llikes: 34,
      // },
    ],
  },
  massegePage: {
    user: [
      {
        id: 1,
        name: "name1",
        avatarUrl:
          "https://cdnb.artstation.com/p/assets/images/images/017/445/619/large/zvvvz-z-o-88d0b67c8c.jpg?1556026624",
      },
      {
        id: 2,
        name: "name2",
        avatarUrl:
          "https://pickaface.net/gallery/avatar/TrueXPixels542b8838a55de.png",
      },
      {
        id: 3,
        name: "name3",
        avatarUrl:
          "https://cdnb.artstation.com/p/assets/images/images/017/445/663/large/zvvvz-z-6817cda5-b52e-425e-ae5f-31d39b6602c4.jpg?1556026733",
      },
    ],
    massege: [
      // {
      //   id: 1,
      //   massege: "massege1",
      //   avatarUrl:
      //     "https://pickaface.net/gallery/avatar/TrueXPixels542b8838a55de.png",
      // },
      // {
      //   id: 2,
      //   massege:
      //     "dear alica how are you. what are you doing.what are you doing.what are you doing.",
      //   avatarUrl:
      //     "https://cdnb.artstation.com/p/assets/images/images/017/445/663/large/zvvvz-z-6817cda5-b52e-425e-ae5f-31d39b6602c4.jpg?1556026733",
      // },
      // {
      //   id: 3,
      //   massege:
      //     "dear alica how are you. what are you doing.what are you doing.what are you doing.",
      //   avatarUrl:
      //     "https://pickaface.net/gallery/avatar/TrueXPixels542b8838a55de.png",
      // },
    ],
  },
};

export let addPost = (postMassege) => {
  // debugger;
  let newPost = {
    imgUrl: imgList[Math.floor(Math.random() * imgList.length)],
    id: 5,
    text: postMassege,
    llikes: Math.floor(Math.random() * 354),
  };

  state.profilePage.post.push(newPost);
  rerenderTree(state);
  console.log(`newPost`, newPost);
};

let imgList = [
  "http://zornet.ru/_fr/90/1623272.jpg",
  "http://zornet.ru/_fr/90/2154352.jpg",
  "http://zornet.ru/_fr/90/3684449.jpg",
  "http://zornet.ru/_fr/90/3165549.jpg",
  "https://trikky.ru/wp-content/blogs.dir/1/files/2020/07/30/original.jpg",
  "https://semantica.in/wp-content/uploads/2018/08/av-427845-1.png",
  "https://trikky.ru/wp-content/blogs.dir/1/files/2020/07/30/jcnagvjq_400x400.jpg",
  "https://trikky.ru/wp-content/blogs.dir/1/files/2020/07/30/jcnagvjq_400x400.jpg",
  "https://pickaface.net/gallery/avatar/TrueXPixels542b8838a55de.png",
  "https://cdnb.artstation.com/p/assets/images/images/017/445/663/large/zvvvz-z-6817cda5-b52e-425e-ae5f-31d39b6602c4.jpg?1556026733",
  "https://cdnb.artstation.com/p/assets/images/images/017/445/619/large/zvvvz-z-o-88d0b67c8c.jpg?1556026624",
  "https://pickaface.net/gallery/avatar/TrueXPixels542b8838a55de.png",
  "https://cdnb.artstation.com/p/assets/images/images/017/445/663/large/zvvvz-z-6817cda5-b52e-425e-ae5f-31d39b6602c4.jpg?1556026733",
];

export let addMassege = (addMassege) => {
  let newMassege = {
    id: 4,
    massege: addMassege,
    avatarUrl: imgList[Math.floor(Math.random() * imgList.length)],
  };

  state.massegePage.massege.push(newMassege);
  rerenderTree(state);
};
export default state;
