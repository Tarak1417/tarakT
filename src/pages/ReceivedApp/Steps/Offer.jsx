import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCircle } from '@fortawesome/free-solid-svg-icons';


const OfferPage = () => {
    
    
    return (
        <div className="container mx-auto overscroll-auto overflow-hidden">
            <div className="flex items-center justify-between p-4">
                <div>
                    <h1 className="text-sm md:text-3xl text-zinc-400">Job Application Details</h1>
                </div>
                <div className="flex items-center gap-4">
                   <button className='flex  items-center text-white font-bold text-[10px] md:text-[12px] py-1 md:py-2 px-2 md:px-3 rounded bg-sky-500 hover:bg-sky-700'>
                        Send Offer Letter
                    </button>
                   <InfoOutlinedIcon />
                </div>
            </div>
            <div className='flex justify-between items-center w-full mt-5'>
                <div className='flex items-center pl-6'>
                    <img src='https://cdn.clikkle.com/images/clikkle/logo/2023/clikkle-text.png' alt='clikkle' className='w-auto h-auto'/>
                </div>
                <div className='flex flex-col gap-0 border border-zinc-50 p-4 w-[10%] border border-r-black'>
                        <p className='text-[12px] text-white text-start'>Offer</p>
                        <h1 className='text-[16px] text-white text-start'>LETTER</h1>
                </div>
            </div>
            <div className='flex flex-row gap-4 w-full mt-28 h-[300px]'>
                <div className='w-1/3 ml-8 flex flex-col'>
                    <h1 className='text-2xl text-white text-start font-bold'>SENIOR</h1>
                    <h1 className='text-2xl text-sky-500 text-start font-bold'>UX/UI DESIGNER</h1>
                    <h1 className='text-center text-lg text-white pt-14'><FontAwesomeIcon icon={faSquare} className='text-[10px] mr-2' />JOIN OUR TEAM OF PROFESSIONAL</h1>
                </div>
                <div className='w-2/3'>

                </div>
                <div className='w-1/3'>
                    <h1 className='text-2xl text-white text-start font-bold'>Job</h1>
                    <h1 className="text-2xl text-sky-500 text-start font-bold">Description.</h1>
                    <p className='text-[12px] text-white text-left pr-12'>
                        We are seeking a highly skilled freelance
                        UI/UX Designer to design a user-based
                        dashboard experience that is intuitive,
                        user-friendly and visually appealing. In 
                        this role, you will work closely with our 
                        strategy lead, and developers and other 
                        stakeholders to create..<span className='text-blue-500 text-sm'>ReadMore</span>
                    </p>
                </div>
            </div>
            <div className='w-full flex justify-center items-center h-[300px]'>
            <div className='w-[75%] mt-10 flex flex-col'>
                <h1 className='text-blue-500 text-sm text-center'>Greetings [Name],</h1>
                <h1 className='text-white text-sm text-center'>
                    After a through assessment of your credentials and thoughtful deliberation, we are delighted to extend an offer for the position offer
                    [position title]. We kindly request your meticulous review of the attached job offer letter, and we encourage you to affix your signature at 
                    your earliest convenience. This step marks the initiation of your onboarding journey.
                </h1>
                <h1 className='text-sm text-center text-blue-500'>We look forward to your positive response.</h1>
            </div>
            </div>
            <div className='w-full flex justify-center items-center h-[300px]'>
            <div className='w-[75%] mt-10 flex flex-col'>
                <h1 className='text-white text-5xl text-center font-bold'>JOIN OUR</h1>
                <h1 className='text-blue-500 text-5xl text-center font-bold'>GROWING</h1>
                <h1 className='text-5xl text-center text-white font-bold'>TEAM</h1>
            </div>
            </div>
            <div className='w-full flex flex-col gap-4 h-[600px] mt-32'>
                <div className='w-full mx-8 flex flex-row gap-4'>
                    <div className='w-1/2 flex flex-col'>
                        <h1 className='text-3xl text-white'>About <span className='text-3xl text-blue-500'>Company</span></h1>
                        <p className='text-sm text-left text-white pt-10'>
                            Clikkle Technologies disrupts the SaaS sector with practical A1
                            solutions, empowering businesses to unleash their data's
                            potentials. Our innovative A1 platforms drive impactful results for 
                            global companies, revolutionizing how they operate. We seek 
                            ambitious problem solver to join our rewarding journey. Embrace 
                            the impossible with us and unlock your potential at Clikkle.
                        </p>
                    </div>
                    <div className='w-1/2'>

                    </div>
                </div>
                <div className='w-full flex justify-between p-4 mt-32'>
                    <div className='w-1/2 mx-4'>
                        <h1 className='text-5xl text-white text-start'>MORE <span className='text-2xl text-start text-white'>INFORMATION</span></h1>
                    </div>
                    <div className='w-[10%]'>
                        <h1 className='text-xl text-start text-white'><FontAwesomeIcon icon={faSquare} className='text-[10px] mr-2' />Offer</h1>
                        <h1 className='text-xl text-center text-white'>LETTER</h1>
                    </div>
                </div>
            </div>
            <div className='flex justify-between w-full'>
                <div className='flex flex-col  justify-start w-1/3 mx-8'>
                    <h1 className='text-[24px] text-white'>Reporting</h1>
                    <h1 className='text-[24px] text-blue-500'>Relationship</h1>
                    <p className='pt-10 text-[16px] text-white pr-12'>
                        The Senior UX/UI Designer will report directly 
                        to <span className='text-blue-500'>Stephan Graham, Head of Development.</span><br/>
                        They will collaborate closely with the Development Team.
                    </p>
                </div>
                <div className='flex flex-col w-1/2 mx-8'>
                    <h1 className='text-[24px] text-white text-right'>Probationary</h1>
                    <h1 className='text-[24px] text-blue-500 text-right'>Period</h1>
                    <p className='pt-10 text-[16px] text-white pl-40 text-right'>
                        The initial Probationary period for this position will be  <span className='text-blue-500'>3 <br/>months</span>
                        , during which performance and suitability for the role will be evaluated. Employment confirmation will be 
                        subject to a satisfactory review at the end of the Probationary period.
                    </p>

                </div>
            </div>
            <div className='w-full flex justify-center items-center h-[300px]'>
                <div className='w-[75%] mt-10 flex flex-col items-center justify-center gap-4'>
                     <button className="text-center text-white font-semibold text-xl  border border-white py-2 px-6">
                       Base <span className='text-blue-500 text-xl'>Salary</span>    
                    </button> 
                    <p className='text-xl text-center text-white'>
                        The<span className='text-xl text-blue-500 pl-2 pr-2'>Senior UX/UI Designer</span>
                        Will receive a competitive base salary of <span className='text-xl text-blue-500 pl-2 pr-2'>29800 CAD</span>
                        per year, payable in Bi-Weekly installments.
                    </p>
                </div>
            </div>
            <div className='flex justify-between w-full'>
                <div className='flex flex-col  justify-start w-1/3 mx-8'>
                    <h1 className='text-[24px] text-white'>Benefits</h1>
                    <p className='text-[18px] text-white pt-5'>We offer a comprehensive benefit package, including, but not limited to:</p>
                    <p><FontAwesomeIcon icon={faCircle} className='pr-2 text-[8px] pt-8'/>
                        Part of Clikkle's Success Story Stock options to make you an owner in the company.
                    </p>
                    <p><FontAwesomeIcon icon={faCircle} className='pr-2 text-[8px]'/>
                        Learning and Development: Free Coursera account to advance your skills and interests.
                    </p>
                    <p><FontAwesomeIcon icon={faCircle} className='pr-2 text-[8px]'/>
                        Fostering Innovation: Hackathons to showcase your ideas and skills.
                    </p>
                </div>
                <div className='flex flex-col w-1/3 mx-8'>
                    <h1 className='text-[24px] text-white text-right'>Allowances</h1>
                    <p className='text-[18px] text-white text-right pl-12 pt-5 text-right'>As part of the compensation package, the <span className='text-blue-500 text-[18px] pl-2 pr-2'>Senior Ux/UI Designer</span> will receive the following allowances:</p>
                    <p className='text-right'><FontAwesomeIcon icon={faCircle} className='pr-2 text-[8px]'/>Gym Allowances</p>
                    <p className='text-right'><FontAwesomeIcon icon={faCircle} className='pr-2 text-[8px]'/>Phone Allowances</p>
                    <p className='text-right'><FontAwesomeIcon icon={faCircle} className='pr-2 text-[8px]'/>Travel Allowances</p>
                </div>
            </div>
            <div className='flex justify-between w-full mt-32'>
                <div className='flex flex-col  justify-start w-1/3 mx-8'>
                    <h1 className='text-[24px] text-white'>Vocation & Personal</h1>
                    <h1 className='text-[24px] text-blue-500'>Emergency Time Off</h1>
                    <p className='pt-10 text-[16px] text-white pr-12'>
                        The<span className='text-[16px] text-blue-500 pl-2 pr-2'>Senior UX/UI Designer</span>
                        will be entitled to <span className='text-[16px] text-blue-500 pl-0 pr-2'>5-30 days</span>
                        of paid vocation leave per year. Additionally, <span className='text-[16px] text-blue-500 pl-2 pr-2'>7 days</span>
                        of personal emergency time off will be provided for unforeseen circumstances.
                    </p>
                </div>
                <div className='flex flex-col w-1/2 mx-8'>
                    <h1 className='text-[24px] text-white text-right'>Currency</h1>
                    <h1 className='text-[24px] text-blue-500 text-right'>Deductions</h1>
                    <p className='pt-10 text-[16px] text-white pl-32 text-right'>
                        All salaries and allowances will be paid in the local currency.
                        Applicable taxes and deductions as per government 
                        regulations will be withheld from the salary.
                    </p>
                </div>
            </div>
            <div className='w-full flex justify-center items-center h-[300px]'>
                <div className='w-[80%] mt-10 flex flex-col items-center justify-center gap-4'>
                     <button className="text-center text-white font-semibold text-xl  border border-white py-2 px-6">
                       Sign-On <span className='text-blue-500 text-xl'>Bonus</span>    
                    </button> 
                    <p className='text-xl text-center text-white'>
                        This job title receive a competitive sign-on bonus of<span className='text-xl text-blue-500 pl-2 pr-2'>150 CAD</span>
                        payable within <span className='text-xl text-blue-500 pl-2 pr-2'>30 days</span>
                        of employment.
                    </p>
                </div>
            </div>
            <div className='w-full flex justify-center items-center h-[300px]'>
                <div className='w-[90%] mt-10 flex flex-col items-center justify-center gap-4'>
                     <button className="text-center text-white font-semibold text-xl  border border-white py-2 px-6">
                       Expenses   
                    </button> 
                    <p className='text-xl text-center text-white'>
                        The company will reimburse and pre-approved expenses incurred by the<span className='text-xl text-blue-500 pl-2 pr-2'>Senior UX/UI Designer</span>
                        in the course of their duty & proper documentations and approval are required for reimbursement. 
                    </p>
                </div>
            </div>
            <div className='flex justify-between w-full mt-20'>
                <div className='flex flex-col  justify-start w-1/3 mx-8'>
                    <h1 className='text-[24px] text-white'>Termination</h1>
                    <h1 className='text-[24px] text-blue-500'>Conditions</h1>
                    <p className='text-[18px] text-white pt-5'>Termination of employment may occur under the following circumstances:</p>
                    <p><FontAwesomeIcon icon={faCircle} className='pr-2 text-[8px] pt-8'/>
                        Resignation: The <span className='text-[18px] text-blue-500 pl-2 pr-2'>Senior UX/UI Designer</span>
                        from their position by providing a <span className='text-[18px] text-blue-500 pl-2 pr-2'>14 days notice </span>
                        in writing.
                    </p>
                    <p><FontAwesomeIcon icon={faCircle} className='pr-2 text-[8px]'/>
                        Termination for cause: The company reserves the
                        right to terminate employment immediately if the 
                        Senior Ux/UI Designer breaches company policies 
                        or engages in any misconduct.
                    </p>
                    <p><FontAwesomeIcon icon={faCircle} className='pr-2 text-[8px]'/>
                        Termination without cause: The company may 
                        terminate employment without cause by providing 
                        a <span className='text-[18px] text-blue-500 pl-2 pr-2'>48 hours notice</span>
                        or salary in lieu of notice.
                    </p>
                </div>
                <div className='flex flex-col w-1/3 mx-8'>
                    <h1 className='text-[24px] text-white text-right'>Confidentially of Information</h1>
                    <h1 className='text-[24px] text-white text-right'>and Ownership of</h1>
                    <h1 className='text-[24px] text-blue-500 text-right'>Proprietary Property</h1>
                    <p className='text-[18px] text-white text-right  pt-5 text-right'>
                        During the course of employment, the Senior UX/UI Designer may have access to confidential and 
                        proprietary information of the company. They will be required to sign a separate
                        <span className='text-blue-500 text-[18px] pl-2 pr-2'>Non-Disclosure Agreement (NDA)</span> to protect the company's sensitive information.
                    </p>
                </div>
            </div>
            <div className='w-full flex justify-center items-center h-[300px]'>
                <div className='w-[80%] mt-10 flex flex-col items-center justify-center gap-4 border border-white p-4'>
                    <p className='text-lg text-center text-white pt-2'>
                        Your employment with Clikkle is at-will and either party can terminate the relationship at any time with or 
                        without cause, and with or without notice. You acknowledge that this offer letter represents, but is not the entire 
                        agreements between you and Clikkle technologies.
                    </p>
                    <p className='text-lg text-center text-white pt-4'>
                        If you are in agreement with the above outline please sign below. This offer is in effect for
                        <span className='text-lg text-blue-500 pl-2 '>5 business days.</span>
                    </p>
                </div>
            </div>
            <div className='w-full mt-20 flex justify-center items-center'>
            <div className='flex justify-between w-[85%] mx-8'>
                <div className='flex flex-col gap-2 w-1/4'>
                    <input type="text" className="w-full  bg-neutral-950 border border-neutral-700 focus:outline-none p-4" />
                    <span className='w-full border-b border-zinc-300 mt-2'></span>
                </div>
                <div className='flex flex-col gap-2 w-1/4'>
                    <input type="text" className="w-full bg-neutral-950 border border-neutral-700 focus:outline-none p-4" />
                    <span className='w-full border-b border-zinc-300 mt-2'></span>
                </div>
            </div>
            </div>
            <div className='w-full  flex justify-center items-center mb-20 mt-2'>
            <div className='flex justify-between w-[85%] mx-8'>
                <div className='w-1/2'>
                    <h1 className='text-[22px] text-white '>CANDIDATE'S SIGNATURE</h1>
                </div>
                <div className='w-1/2'>
                    <h1 className='text-[22px] text-white text-right '>HR SIGNATURE</h1>
                </div>
            </div>
            </div>
        </div>
    );
};

export default OfferPage;
