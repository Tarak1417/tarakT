import { ChangeEvent, SetStateAction, useCallback, useEffect, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import './apply-for-job.css'
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// import countryCodes from 'country-codes-list';
import { ToastContainer  , toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../../components/Loading";
import { env } from "../../utilities/function";
import { setCookie } from "../../utilities/cookies";
const ApplyForJob = () => {

const [selected, setSelected] = useState("US");
const [user, setUser] = useState({});
const [show, setShow] = useState(false);
const jobId = useParams().id;
const [job, setJob] = useState({});
const [checkBox, setCheckBox] = useState(false);
const navigate = useNavigate();
const location = useLocation();
const [picture, setPicture] = useState('');
const [resume, setResume] = useState('');
const [linkdin , setLinkdin] = useState('');
const [twitter ,setTwitter] = useState('');
const [exp , setExp] = useState('');
const [mob , setmob] = useState('');
const [jobIds , setJobId] = useState();
const [adminId , setAdminId] = useState();

  const fetchJob = useCallback(async function (jobId) {
    const res = await axios.get("/open/job-listing/" + jobId);
    const job = res.data.job;
    setJob(job);
  }, []);

  const createSession = async (refreshToken, user) => {
    try {
      const response = await axios.post(`/open/session`, {
        refreshToken,
        userId: user._id,
      });
      let data = response.data;
      if (data.success) {
        setCookie("accessToken", data.token);
        if (jobId) fetchJob(jobId);
        setUser(user);
      } else {
        setUser(null);
      }
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    (async () => {
      try {
        const queryParameters = new URLSearchParams(window.location.search);
        const userId = queryParameters.get("userId");
        const refreshToken = queryParameters.get("refreshToken");
        console.log(userId);

        if (userId) {
          var formData = new FormData();
          formData.append("id", userId);
          const response = await fetch(
            "https://accounts.clikkle.com:5000/api/auth/get_user_profile",
            // "https://api.campaigns.clikkle.com/get_user_profile",
            // "http://localhost:5000/api/auth/get_user_profile",
            {
              method: "POST",
              body: formData,
            }
          );

          if (response.ok) {
            console.log("user found ...");
            const responseData = await response.json();
            let { user } = responseData;
            user.refreshToken = refreshToken;
            console.log(user);
            localStorage.setItem("careerUser", JSON.stringify(user));
            await createSession(refreshToken, user);
          } else {
            console.log("user not found");
            setUser(null);
          }
        } else if (localStorage.getItem("careerUser")) {
          let user = JSON.parse(localStorage.getItem("careerUser"));
          await createSession(user.refreshToken ,user );
        } else {
          setUser(null);
        }
      } catch (err) {
        console.log(err);
        // handleAxiosError(err, showError);
        setUser(null);
      }
    })();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (user == null) {
    const redirectTo =
      env("AUTHENTICATION_CLIENT") +
      "/login?redirectto=" +
      encodeURIComponent(window.location.href);
    return (
      <Loading
        message="Please wait, redirecting you to Clikkle Accounts"
        redirectTo={redirectTo}
      />
    );
  }


const handleResumeChange = (e) => {
    const { files } = e.target;
  
    const file = files[0];
    const isValidExtension = [
        'PDF', 'DOC', 'DOCX', 'DOCS', 'TXT', 'PNG', 'JPEG', 'JPG', 'AVIF', 'WEBP'
    ].some(ext => new RegExp(`(${ext})$`, 'gi').test(file.name));

    if (!isValidExtension || file.size > 10e6) {
        toast.error('Please provide a valid file format (PDF, DOC, TXT, PNG, JPEG, etc.) and ensure it is under 10MB in size.');
        return;
    }
    toast.success("Resume update successfully");
    setResume(file);
};

const handlePhotoChange = (e) => {
    const { files } = e.target;
    if (!files || files.length === 0) {
        toast.error('No file selected');
        return;
    }

    const file = files[0];
    const isValidExtension = ['PNG', 'JPEG', 'JPG', 'AVIF', 'WEBP'].some(ext =>
        new RegExp(`(${ext})$`, 'i').test(file.name)
    );

    if (!isValidExtension) {
        toast.warn('Please provide a valid photo file format (PNG, JPEG, JPG, AVIF, WEBP).');
        return;
    }
    toast.success("Photo update successfully");
    setPicture(file);
};


const onSubmit = (res) => {
    const { success, errors } = res.data;

    if (success) {
        // toast.success('Applied Successfully');
        // Optionally, redirect or perform other actions upon successful submission
    } else {
        errors.forEach((err) => toast.error(err));
    }
};

const onError = (err) => {
    const { errors } = err.response?.data || { errors: [' Youve already submitted your application. Please remain patient while its being reviewed for shortlisting'] };
    errors.forEach((err) => toast.error(err));
};

const handleSubmit = async (e) => {
    e.preventDefault();
     console.log("call the func")
     
    if (!picture || !resume) {
        toast('Please upload both a photo and a resume.');
        return;
    }

    if (!picture || !resume || !exp || !selected || !linkdin || !jobId || !mob ) {
        toast.error('Please fill out all fields.');
        return;
    }

    if (mob.length !== 10) {
        toast('Please enter a valid 10-digit phone number.');
        return;
    }
    const formData = new FormData();
    formData.append('photo', picture); // Ensure 'photo' matches backend field name
    formData.append('resume', resume); // Ensure 'resume' matches backend field name
    formData.append('experience', exp);
    formData.append('countryCode', selected);
    formData.append('linkedinAccount', linkdin);
    formData.append('jobId', jobId); 
    formData.append('phone', mob);


    try {
        const res = await axios.post('/user/job-application', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        setPicture(null);
        setResume(null);
        setExp('');
        setSelected('');
        setLinkdin('');
        setJobId('');
        setmob('');
        setAdminId('');

        toast.success('Application submitted successfully.');
        onSubmit(res);
    } catch (e) {
        onError(e);

    }
};


    return (
        <>
        <ToastContainer/>
         <div className="flex flex-col h-screen mx-8 md:mx-16 lg:mx-24 xl:mx-32 gap-4 dark:text-zinc-500">

<nav className="flex mt-6" aria-label="Breadcrumb">
    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
            <div className="inline-flex items-center px-1 text-sm font-medium text-blue-600 dark:text-gray-400 dark:hover:text-white">
                Career
            </div>
        </li>
        <li>
            <div className="flex items-center">
                <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
                <span onClick={() => navigate(`/career/job/${jobId}`)} className="ms-1 text-sm font-medium cursor-pointer text-blue-600 md:ms-2 px-1 dark:text-gray-400 dark:hover:text-white">{job?.title}</span>
            </div>
        </li>
        <li aria-current="page">
            <div className="flex items-center">
                <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
                <span className="ms-1 text-sm font-medium text-gray-500 px-1 md:ms-2 dark:text-gray-400">Apply</span>
            </div>
        </li>
    </ol>
</nav>


<form className="w-full mb-8" onSubmit={handleSubmit}>
    <h1 className="text-2xl dark:text-zinc-200 font-bold mt-4 mb-8">Personal Details</h1>
    {/* <div className="formInputGrid gap-20 mb-6 sm:gap-10">
        <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="firstName" >
                First Name
            </label>
            <input className="shadow appearance-none border rounded-lg placeholder-gray-600 w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="firstName" name="firstName" type="text" placeholder="Enter First Name" />
        </div>
       
        <div className="mb-4">
     <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="lastName" >
                Last Name
            </label>
            <input className="shadow appearance-none border placeholder-gray-600 rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="lastName" name="lastName" type="text" placeholder="Enter Last Name" />
        </div>
    </div>

    <div className="formInputGrid gap-20 mb-6">
        <div className="mb-4 w-full">
            <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="email" >
                Email
            </label>
            <input className="shadow appearance-none border rounded-lg placeholder-gray-600 w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="email" name="email" type="email" placeholder="Enter Email" />
        </div>

        <div className="mb-4 w-full">
            <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="phone" >
                Phone Number
            </label>
            <div className="flex items-center">
                <ReactFlagsSelect
                    selected={selected}
                    onSelect={(code) => setSelected(code)}
                    className="w-16"
                    showSelectedLabel={false}
                    showSecondaryOptionLabel={false}
                    showOptionLabel={false}
                    selectedSize={22}
                />
                <input className="flex-1 shadow appearance-none border placeholder-gray-600 rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-3 dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="phone" name="phone" type="text" placeholder="Enter Phone Number"
                onChange={(e)=>setmob(e.target.value)}
                required/>
            </div>
        </div>
        
    </div> */}

    {/*   <div className="formInputGrid gap-20 mb-6">
      <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="dob" >
                D.O.B
            </label>
            <div className="dobGrid">
            <select name="month" id="month" className="border shadow border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#141414] dark:border-slate-600 dark:placeholder-slate-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Month</option>
                    <option value="1">Jan</option>
                    <option value="2">Feb</option>
                    <option value="3">Mar</option>
                    <option value="4">Apr</option>
                    <option value="5">May</option>
                    <option value="6">Jun</option>
                    <option value="7">Jul</option>
                    <option value="8">Aug</option>
                    <option value="9">Sep</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="11">Dec</option>
                </select>
                <select name="day" id="day" className="border shadow border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#141414] dark:border-slate-600 dark:placeholder-slate-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Day</option>
                    {Array.from({ length: 31 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}                            </select>
                <select name="year" id="year" className="border shadow border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-[#141414] dark:border-slate-600 dark:placeholder-slate-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Year</option>
                    {Array.from({ length: 50 }, (_, i) => (
                        <option key={i + 1960} value={i + 1960}>{i + 1960}</option>
                    ))}
                </select>
            </div>

        </div>
        <div className="mb-6">
            <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="jobRole" >
                Job Role
            </label>
            <input className="shadow appearance-none border placeholder-gray-600 rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="jobRole" type="text" placeholder="Enter Job Role" required/>
        </div>
    </div>
     */}

        <div className="mb-4 w-full">
            <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="phone" >
                Phone Number
            </label>
            <div className="flex items-center">
                <ReactFlagsSelect
                    selected={selected}
                    onSelect={(code) => setSelected(code)}
                    className="w-16"
                    showSelectedLabel={false}
                    showSecondaryOptionLabel={false}
                    showOptionLabel={false}
                    selectedSize={22}
                />
                <input className="flex-1 shadow appearance-none border placeholder-gray-600 rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-3 dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="phone" name="phone" type="text" placeholder="Enter Phone Number"
                onChange={(e)=>setmob(e.target.value)}
                required/>
            </div>
        </div>

    <div className="mb-6">
        <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="experience" >
            Years of Experience
        </label>
        <input className="shadow appearance-none border placeholder-gray-600 rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="experience" type="number" placeholder="Enter Whole Numbers Only"
        onChange={(e)=>setExp(e.target.value)}
        required/>
    </div>



    {/* <div className="formInputGrid gap-20 mb-6">
        <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="cityName" >
                City Name
            </label>
            <input className="shadow appearance-none border rounded-lg placeholder-gray-600 w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="cityName" type="text" placeholder="Enter City Name" />
        </div>
        <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="postal" >
                Postal Code
            </label>
            <input className="shadow appearance-none border placeholder-gray-600 rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="postal" type="text" placeholder="Enter Postal Code" />
        </div>
    </div> */}

    {/* <h1 className="text-2xl dark:text-zinc-200 font-bold mt-4 mb-8">Education</h1>
    <div className="formInputGrid gap-20 mb-6">
        <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="school" >
                School
            </label>
            <input className="shadow appearance-none border rounded-lg placeholder-gray-600 w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="school" type="text" placeholder="Enter School Name" />
        </div>
        <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="fieldOfStudy" >
                Field Of Study
            </label>
            <input className="shadow appearance-none border placeholder-gray-600 rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="fieldOfStudy" type="text" placeholder="Enter Field Of Study" />
        </div>
    </div>
    <div className="mb-2">
        <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="edSummary" >
            Summary
        </label>
        <textarea className="shadow appearance-none border placeholder-gray-600 rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="edSsummary" rows={5} placeholder="Summary" />
    </div>
    <div className="mb-5">
        <button type="button" className="d-block bg-transparent text-sky-600 text-sm">Delete</button>
    </div>
    <div className="mb-8">
        <button type="button" className="bg-transparent text-sky-600">+ Add Education</button>
    </div> */}

    {/* <h1 className="text-2xl dark:text-zinc-200 font-bold mt-4 mb-2">Experience</h1>
    <h3 className="text-gray-400 text-sm mb-6">Work History</h3>
  */}
    {/* <div className="formInputGrid gap-20 mb-6">
        <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="startDate" >
                Start Date
            </label>
            <input className="shadow appearance-none border rounded-lg placeholder-gray-600 w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="startDate" type="date" />
        </div>
        <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="endDate" >
                End Date
            </label>
            <input className="shadow appearance-none border placeholder-gray-600 rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="endDate" type="date" />
        </div>
    </div>
    <div className="mb-2">
        <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="workSummary" >
            Summary
        </label>
        <textarea className="shadow appearance-none border placeholder-gray-600 rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="workSsummary" rows={5} placeholder="Summary" />
    </div> */}
    {/* <div className="mb-5">
        <button type="button" className="d-block bg-transparent text-sky-600 text-sm">Delete</button>
    </div>
    <div className="mb-8">
        <button type="button" className="bg-transparent text-sky-600">+ Add Position</button>
    </div> */}


    <h1 className="text-2xl dark:text-zinc-200 font-bold mt-4 mb-6">Upload Documents</h1>

    <div className="mb-4">
        <h3 className="mb-2 mr font-bold dark:text-white">Upload Picture</h3>
        <button type="button" className="bg-sky-600 rounded text-white px-6 py-3 mr-2">Upload Picture</button>
        <input type="file" accept="*"  required  onChange={handlePhotoChange}/>
    </div>
    <div className="mb-4">
        <h3 className="mb-2 font-bold dark:text-white">Resume/CV</h3>
        <button type="button" className="bg-sky-600 rounded text-white px-6 py-3 mr-2">Upload Resume/CV</button>
        <input type="file" accept="*"   onChange={handleResumeChange}   required/>
    </div>
    {/* <div className="mb-4">
        <h3 className="mb-2 font-bold dark:text-white">Cover Letter</h3>
        <button type="button" className="bg-sky-600 rounded text-white px-6 py-3">Upload Cover Letter</button>
        <input type="file" accept=".pdf, .docx, .txt" className="hidden" />
    </div>

    <div className="mb-8">
        <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="coverLetter" >
            Or type in box
        </label>
        <textarea className="shadow appearance-none border placeholder-gray-600 rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="coverLetter" rows={5} placeholder="Cover Letter" />
    </div> */}

    <h1 className="text-2xl dark:text-zinc-200 font-bold mt-4 mb-6">Socials</h1>

    <div className="formInputGrid gap-20 mb-6">
        <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="linkedin" >
                Add the link to your Linkedin Profile
            </label>
            <input className="shadow appearance-none border rounded-lg placeholder-gray-600 w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="linkedin" type="text" placeholder="Enter Profile Link"
            onChange={(e)=>setLinkdin(e.target.value)}
            required />
        </div>
        <div className="mb-12">
            <label className="block text-black text-sm font-bold mb-4 dark:text-zinc-200" htmlFor="twitter" >
                Add the link to your Twitter Profile
            </label>
            <input className="shadow appearance-none border placeholder-gray-600 rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#141414] dark:text-white dark:border-slate-600 dark:placeholder-slate-600" id="twitter" type="text" placeholder="Enter Profile Link"
                                    onChange={(e)=>setTwitter(e.target.value)}

            />
        </div>
    </div>

    <div className="text-center mb-16">
        <button className="bg-sky-600 rounded text-white px-6 py-3">Submit The Application</button>
    </div>
</form>

</div>
        </>
       
    )
}

export default ApplyForJob