
import React from 'react'
import profile from './Picture/profile.png'
import './Sidebar.css';
import Dashborad from './icon/Dashborad.png';
import Category from './icon/Category.png';
import Groups from './icon/Groups.png';
import chat from './icon/Chat.png';
import Member_icon from './icon/Member_icon.png';
import vector_icon from './icon/Vector_icon.png';
import calender from './icon/Calendar.png';
import cap_1 from './icon/Capa_1.png';
import Group from './icon/Group.png';
import Layer_1 from './icon/Layer_1.png';
import Paper from './icon/Paper.png';
import PaperPlus from './icon/PaperPlus.png';
import vector2 from './icon/Vector2.png';
import user from  './icon/User22.png';
import user21 from './icon/User21.png';
import king from './icon/king.png';
import logout from './icon/Logout.png';
function Sidebar() {

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className='col-sm-12 col-md-3 col-lg-3'>
                        <div className='sidebar mx-3'>
                            <div className='Hello'>
                                <img className='img-fluid mt-3 sidepic' src={profile} />
                            </div>
                            <h4 className='Ouss'>Oussama Mansour</h4>
                            <p className='text-center'>User</p>


                            <div>
                                <img className='img-fluid Dash_borad ms-5' src={Dashborad} />
                                <span className='Dashborad_text ps-3'>Dashborad</span>
                            </div>


                            <div className='Social ps-5 pt-3' >Social</div>

                            <div className='Yellow_green'>
                                <img className='img-fluid catg ms-5 mt-4' src={Category} />
                                <span className='Feed ps-3'> New Feed</span>
                            </div>

                            <div>
                                <img className='Groups_icon ms-5 mt-4' src={Groups} />
                                <span className='ps-3 Groups_text'>Groups</span>
                            </div>

                            <div>
                                <div className='massage_icon'>
                                    <img className='img-fluid ms-5 mt-3 chat_icon' src={chat} />
                                    <span className='chat_text ps-3'>Massage</span>
                                </div>
                            </div>


                            <div>
                                <div className='ms-5 mt-3'><img className='member' src={Member_icon} />
                                    <span className='member_text ps-3'>Member</span>
                                </div>
                            </div>


                            <div>
                                <div className='ms-5 mt-4'><img className='img-fluid vector_icon' src={vector_icon} />
                                    <span className='vector_text ps-3'> Forums</span>
                                </div>
                            </div>
                            <div className='calander'>
                                <div>
                                    <img className='img-fluid ps-5 pt-4' src={calender} />
                                    <span className='ps-3 calender_text'>Events</span>
                                </div>
                            </div>


                            <div className='Learing ps-5'>Learing</div>

                            <div>
                                <div className=''><img className='ms-5' src={cap_1} />
                                    <span className='ps-3'>ILMF Joureny</span>
                                </div>
                            </div>


                            <div>
                                <div> <img className='ps-5 pt-4' src={Group} />
                                    <span className='ps-3 Academy'>ILMF Academy</span>
                                </div>
                            </div>

                            <div>
                                <div> <img className='ps-5 pt-4' src={Layer_1} />
                                    <span className='ps-3 pt-4 Academy'>1-on-1 Coaching</span>
                                </div>
                            </div>


                            <div>
                                <div>
                                    <img className='ps-5 pt-4' src={Paper} />
                                    <span className='ps-3 Academy'>Assessatment</span>
                                </div>
                            </div>


                            <div>
                                <div>
                                    <img className='ps-5 pt-4' src={PaperPlus} />
                                    <span className='ps-3 Academy'>Articles</span>
                                </div>
                            </div>


                            <div>
                                <div>
                                    <img className='ps-5 pt-4' src={vector2}/>
                                    <span className='ps-3 Academy'>Support</span>
                                </div>
                            </div>


                          <div>
                            <div>
                                <div><img className='ps-5 pt-4' src={user21} />
                                    <span className='ps-3 Academy'>Get Involved</span>
                                </div>
                            </div>


                            <div>
                                <div>
                                    <img className='img-fluid ps-5 pt-4' src={king}/>
                                    <span className='ps-3 Academy'>Upgrade Plan</span>
                                </div>
                            </div>


                          <div>
                            <img className='img-fluid ps-5 pt-4' src={logout} />
                            <span className='ps-4 Academy'>Logout</span>
                          </div>  
                          </div>  
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
