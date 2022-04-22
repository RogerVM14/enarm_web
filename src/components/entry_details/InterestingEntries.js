import React from 'react'; 
import { Link } from 'react-router-dom';
import blog1Image from '../../assets/imgs/blog_1.png';
import blog2Image from '../../assets/imgs/blog_2.png';
import blog3Image from '../../assets/imgs/blog_3.png';
import '../../css/entry_details/InterestingEntries.css'

const entries_list = [
    {
        image: blog1Image,
        date: "25/02/2021",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
    },
    {
        image: blog2Image,
        date: "25/02/2021",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
    },
    {
        image: blog3Image,
        date: "25/02/2021",
        text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
    }
]

const InterestingEntries = () => {

    
    // setTimeout(() => {
        
    //     const body = document.querySelector("body");
    //     body.scrollTop = 0; 
        
    // }, 100);

    // const goToTop = () => {
    //     const body = document.querySelector("body");
    //     body.scrollTop = 0; 
    // }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
 
    return (
        <div className='interesting-entries bg-blue'>
            <div className="interesting-entries-container">
                <div className="container-head">
                    <h1 className="text-center bold-39 white">Entradas que te pueden interesar</h1>
                </div>
                <div className="container-body">
                    <div className="entries">

                        {
                            entries_list.map((item, index) => {
                                return (
                                    <div className='entry' key={index}>
                                        <Link to={`/blog/${index}`} onClick={() => topFunction()}> 
                                            <div className="entry-image">
                                                <img src={item.image} alt="entry" />
                                            </div>
                                            <div className="entry-text">
                                                <p className="gray">25/02/2021</p>
                                                <p className="regular-20">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p> 
                                            </div> 
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div> 
        </div> 
    )
}

export default InterestingEntries;