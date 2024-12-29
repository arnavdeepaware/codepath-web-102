import React from "react"
import Event from "./Event";

const Calendar = ()=>{
    return(
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <Event event='Yoga 🧘‍♀️' color='green' location='Lakefront Park'/>
                        <td></td>
                        <Event event="Tiffany's 🥐" color='green' location='Mag Mile'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <Event event="Subway 🚊" color='pink' location='Union Station'/>
                        <td></td>
                        <td></td>
                        <Event event='Morning Coffee' color='green' location='The Wormhole'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <Event event="Art Museum 🎨" color='blue' location='The Art Institute'/>
                        <td></td>
                        <Event event="Tea Time 🍵" color='green' location='The Peninsula'/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <Event event="Lakeview Brunch" color='green' location='Southport Corridor'/>
                        <td></td>
                        <td></td>
                        <Event event="Picnic 🧺" color='blue' location='Grant Park'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <Event event="Giordano’s 🍕" color='green' location='River North'/>
                        <td></td>
                        <Event event="Walking Tour 🏙️" color='blue' location='Loop District'/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <Event event="History Museum" color='blue' location='Lincoln Park'/>
                        <td></td>
                        <td></td>
                        <Event event="Beach 🌊" color='green' location='Oak Street Beach'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <Event event="Shopping 🛍️" color='pink' location='North Michigan Ave'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event="Architecture Tour" color='blue' location='Chicago River'/>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <td></td>
                        <Event event="Nap Time 😴" color='green' location='Hotel Room'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event="The Bean 🫘" color='blue' location='Millennium Park'/>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <Event event="Ice Cream Break 🍦" color='pink' location='Jeni’s Ice Cream'/>
                        <td></td>
                        <td></td>
                        <Event event="Stroll 🌳" color='blue' location='Millennium Park'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <td></td>
                        <td></td>
                        <Event event="Happy Hour 🍹" color='pink' location='The Aviary'/>
                        <td></td>
                        <Event event="Sunset 🌅" color='blue' location='Adler Planetarium'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">6 pm</td>
                        <Event event="Dinner at Alinea 🍽️" color='green' location='Lincoln Park'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event="Jazz Night 🎷" color='pink' location='The Green Mill'/>
                    </tr>
                    <tr>
                        <td className="time">7 pm</td>
                        <td></td>
                        <Event event="Theater Show 🎭" color='pink' location='Chicago Theater'/>
                        <td></td>
                        <Event event="Night Walk 🌙" color='blue' location='Navy Pier'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">8 pm</td>
                        <td></td>
                        <Event event="Rooftop Drinks 🍸" color='pink' location='The Signature Room'/>
                        <td></td>
                        <Event event="Nightcap 🍷" color='pink' location='Wicker Park'/>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;

