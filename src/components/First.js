import '../styles/First.css';
import picture1 from '../assets/post1.jpg';
import picture2 from '../assets/post2.jpg';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdPhoneAndroid } from "react-icons/md";


function First() {

   




    let Image = [
        {id: 1, name:"photo", image:picture1},
        {id: 2, name:"photo", image:picture2}
    ];

    let Social = {
        id: 3,
        items: [
            <a key="instagram" href=''><FaInstagram /></a>,
            <a key="facebook" href=''><FaFacebook /></a>,
            <a key="tiktok" href=''><AiFillTikTok /></a>,
            <a key="phone" href=''>+225 07-90-45-37-00</a>,
            <a key="map" href=''><FaMapMarkerAlt /></a>
        ]
    };

    
    let Services = [
        {
      "to": "",
      "key": "Service 1",
      "text": "Soins du visage"
    },
    {
      "to": "",
      "key": "Service 2",
      "text": "Soins du corps"
    },
    {
      "to": "",
      "key": "Service 3",
      "text": "Soins des Mains et Pieds"
    },
    {
      "to": "",
      "key": "Service 4",
      "text": "Soins Capillaires"
    },
    {
      "to": "",
      "key": "Service 5",
      "text": "Soins Esthétiques"
    }
    ]


    return(
        <div className='first_main'>
            <div className='first_box' id='box1'>
                <div className='content1'>
                    <h4>
                        Découvrez "SPAOnline", un havre de paix où bien-être et relaxation s'unissent pour vous offrir une évasion sensorielle. Entre massages envoûtants, soins revitalisants et ambiances apaisantes, plongez dans un univers dédié à votre épanouissement.
                    </h4>

                    <div className='content_social' key={Social.id}>
                        <ul>
                            {Social.items.map((item, index) => (
                                <li className='social' key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='content2'>
                    {Image.map((ima) => (
                        <div className='element' key={ima.id}>
                            <img src={ima.image} alt={ima.name} />
                        </div>
                    ))}
                </div>
            </div>

            <div className='first_box' id='box2'>
                <div className='box_content1'>
                   {Services.map((serv) =>
                   <Link to={serv.to} className='cont' >
                     <div  key={serv.key} className='cont_text'>
                         {serv.text}
                    </div>
                   </Link>
                )}
                </div>

                 <div className='box_content2'>
                    <MdPhoneAndroid className='box_icons' />
                    <Link to='/reservation' className='box_icon_text'>Réservez dès maintenant !</Link>
                </div>
            </div>
        </div>
    )
}

export default First;