import { useState } from "react";
import ItemContext from "./ItemContext";

const ItemState = (props)=>{
    const items = [
        {
            id: 1,
            title: 'Chilli Paneer',
            category: "Starter",
            price: 330,
            img: 'https://www.shutterstock.com/image-photo/paneer-chilli-indo-chinese-cuisine-260nw-1876336663.jpg',
            desc: ''
        },
        {
            id: 2,
            title: 'Manchurian',
            category: "Starter",
            price: 180,
            img: 'https://www.shutterstock.com/image-photo/veg-manchurian-gravy-balls-black-260nw-1850620909.jpg',
            desc: ''
        },
        {
            id: 3,
            title: 'Spring Roll',
            category: "Starter",
            price: 180,
            img: 'https://media.istockphoto.com/id/684070860/photo/vegetable-spring-rolls.jpg?s=612x612&w=0&k=20&c=14ajA5mu4ql3y3tnZYvddG_qeTLBENKfr3-L1szrEHw=',
            desc: ''
        },
        {
            id: 4,
            title: 'Veg Noodles',
            category: "Starter",
            price: 200,
            img: 'https://thumbs.dreamstime.com/b/veg-hakka-noodles-popular-oriental-dish-made-vegetables-served-over-rustic-wooden-background-selective-focus-224003256.jpg',
            desc: ''
        },
        {
            id: 5,
            title: 'Momos',
            category: "Starter",
            price: 120,
            img: 'https://st3.depositphotos.com/1491432/16181/i/600/depositphotos_161818062-stock-photo-traditional-dumpling-momos-and-tomato.jpg',
            desc: ''
        },
        {
            id: 6,
            title: 'Cheese Burger',
            category: "Starter",
            price: 90,
            img: 'https://media.istockphoto.com/id/617364554/photo/hamburger-with-fries.jpg?s=612x612&w=0&k=20&c=t8fMIRewNFRU7YSMNWIx2axoyZNjsh0cxHM4vYMALf8=',
            desc: ''
        },
        {
            id: 7,
            title: 'Cheese Pizza',
            category: "Starter",
            price: 350,
            img: 'https://img.freepik.com/premium-photo/slice-hot-italian-pizza-with-stretching-cheese-pizza-four-cheeses-with-basil_79782-3174.jpg',
            desc: ''
        },
        {
            id: 8,
            title: 'Chilli Potato',
            category: "Starter",
            price: 180,
            img: 'https://media.istockphoto.com/id/1155838446/photo/honey-chilli-potatoes-is-an-indo-chinese-dish-where-deep-fried-potato-fingers-are-tossed-in.jpg?s=612x612&w=0&k=20&c=6Be5GBjZWymAANcLwVX7H9tWR8BeJIfpOBFgGo9_kk0=',
            desc: ''
        },
        {
            id: 9,
            title: 'Shahi Paneer',
            category: "Main Course",
            price: 340,
            img: 'https://t3.ftcdn.net/jpg/03/31/65/46/360_F_331654602_hklKvRNNtaJ3iPVHGQ0bvmOEczYH1LAZ.jpg',
            desc: ''
        },
        {
            id: 10,
            title: 'Palak Paneer',
            category: "Main Course",
            price: 300,
            img: 'https://thumbs.dreamstime.com/b/palak-paneer-traditional-popular-indian-dish-spinach-cheese-37177993.jpg',
            desc: ''
        },
        {
            id: 11,
            title: 'Biryani',
            category: "Main Course",
            price: 330,
            img: 'https://img.freepik.com/premium-photo/mutton-lamb-biriyani-with-basmati-rice-served-bowl-moody-background_466689-72544.jpg   ',
            desc: ''
        },
        {
            id: 12,
            title: 'Idli Sambhar',
            category: "Main Course",
            price: 90,
            img: 'https://vaya.in/recipes/wp-content/uploads/2018/02/Idli-and-Sambar-1.jpg',
            desc: ''
        },
        {
            id: 13,
            title: 'Kashmiri Allo',
            category: "Main Course",
            price: 180,
            img: 'https://www.shutterstock.com/image-photo/kashmiri-dum-aloo-spicy-potato-260nw-725768287.jpg',
            desc: ''
        },
        {
            id: 14,
            title: 'Chhole Bhature',
            category: "Main Course",
            price: 180,
            img: 'https://img.freepik.com/premium-photo/chole-bhature-spicy-chick-peas-curry-also-known-as-chole-channa-masala-is-traditional-north-indian-main-course-recipe-usually-served-with-fried-puri-bhature-selective-focus_726363-296.jpg',
            desc: ''
        },
        {
            id: 15,
            title: 'Allo Dam Masala',
            category: "Main Course",
            price: 180,
            img: 'https://media.istockphoto.com/id/1091565958/photo/spicy-potato-curry-indian-recipe.jpg?s=612x612&w=0&k=20&c=km419oVyfT731IrxaqSqUYGS5vgN1K1f1Xb32sw1Jms=',
            desc: ''
        },
        {
            id: 16,
            title: 'Masala Dosa',
            category: "Main Course",
            price: 200,
            img: 'https://wallpaperaccess.com/full/6340448.jpg',
            desc: ''
        },
        {
            id: 17,
            title: 'Gulab Zamun',
            category: "Dessert",
            price: 35,
            img: 'https://media.istockphoto.com/id/521803129/photo/gulab-jamun-11.jpg?s=612x612&w=0&k=20&c=wyJaXY7Uu0hMBCXkcTDRaujSKN6Rp9roJeKDvF6CfHI=',
            desc: ''
        },
        {
            id: 18,
            title: 'Rasmalai',
            category: "Dessert",
            price: 30,
            img: 'https://www.cookwithmanali.com/wp-content/uploads/2014/07/Rasmalai-Recipe-500x500.jpg',
            desc: ''
        },

        {
            id: 19,
            title: 'Rajbhog',
            category: "Dessert",
            price: 35,
            img: 'https://www.awesomecuisine.com/wp-content/uploads/2014/10/rajbhog.jpg',
            desc: ''
        },

        {
            id: 20,
            title: 'Chocolate Icecream',
            category: "Dessert",
            price: 90,
            img: 'https://joyfoodsunshine.com/wp-content/uploads/2020/06/homemade-chocolate-ice-cream-recipe-7.jpg',
            desc: ''
        },
        {
            id: 21,
            title: 'Vanilla Icecream',
            category: "Dessert",
            price: 60,
            img: 'https://www.thespruceeats.com/thmb/VFDNbGNyW9mlfeY4zPeOvhIfKeQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/no-cook-vanilla-ice-cream-recipe-1945802-hero-01-cbd4c64c079b4caebe3f3e9add94ff9a.jpg',
            desc: ''
        },
        {
            id: 22,
            title: 'Rabdi Malai',
            category: "Dessert",
            price: 50,
            img: 'https://t3.ftcdn.net/jpg/01/76/28/04/360_F_176280486_dA4kn5rNfoyIWIFqkk4SAfd6TjcPgmFA.jpg',
            desc: ''
        },
        {
            id: 23,
            title: 'Cold Kulfi',
            category: "Dessert",
            price: 35,
            img: 'https://www.shutterstock.com/image-photo/rajasthani-home-made-ready-eat-260nw-606922655.jpg',
            desc: ''
        },
        {
            id: 24,
            title: 'Motichur',
            category: "Dessert",
            price: 20,
            img: 'https://3.imimg.com/data3/AV/AY/MY-11357049/motichur-laddu-orange-500x500.jpg',
            desc: ''
        }
    ]
    let Quantity = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const [f, setF] = useState(0);
    const [quantity, setQuantity] = useState(Quantity)
    return (
        <ItemContext.Provider value = {{items,quantity,f,setF,setQuantity}}>
            {props.children}
        </ItemContext.Provider>
    )
}

export default ItemState