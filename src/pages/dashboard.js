import React from "react";
import NavbarComponent from "../component/navbar";
import foto from "../hero.png";
import foto2 from "../ja.png";
import completefoto from "../complete.png";
import findfoto from "../find.png";
import interviewfoto from "../interview.png";
import workfoto from "../work.png";
import helpfoto from "../dreamjob2.png";
import axios from "axios";
import { useState, useEffect } from "react";

function Dashboard() {
	const [data, setData] = useState(null);
	useEffect(() => {
		axios
			.get("https://dev-example.sanbercloud.com/api/job-vacancy")
			.then((res) => {
				setData([...res.data.data]);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<NavbarComponent />
			<div className="flex flex-col-reverse py-[80px] px-[40px] font-['Poppins'] tracking-wide lg:flex-row lg:px-[140px]">
				<div className="flex flex-col w-full lg:w-[530px] space-y-[23px]">
					<h1 className="text-[30px] lg:text-[70px] font-semibold">
						Find the job that fits your lifestyle
					</h1>
					<span className="font-medium tracking-normal text-gray-500">
						Job search platform that help student looking to kick start your
						career on experienced professional looking for the next big
						challanges.
					</span>
					<img
						src={foto2}
						className="w-[0%] lg:absolute lg:top-[370px] lg:w-[10%] lg:left-[420px]"
						alt=""
					></img>
					<div>
						<div className="flex items-center">
							<label htmlFor="simple-search" className="sr-only">
								Search
							</label>
							<div className="relative">
								<input
									type="text"
									id="simple-search"
									className="bg-gray-50 border border-gray-300 text-gray-900  rounded-md focus:ring-blue-500 focus:border-blue-500  pl-5 p-2.5  dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-xs w-[140%] lg:text-sm lg:block lg:w-[352px]"
									placeholder="Job Category, Keyword, Company"
									required
								/>
							</div>
							<button
								type="submit"
								className="p-2.5 ml-[80px] lg:ml-2 text-sm font-medium text-white bg-[#f26622] rounded-md border border-[#f26622] hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
							>
								<svg
									className="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<img
					src={foto}
					alt="Foto Kerja"
					className="w-[100%] mx-auto lg:w-[46%]"
				></img>
			</div>
			<div className="flex flex-row font-['Poppins'] tracking-wide bg-black space-x-[10px] px-[20px] text-[11px] py-[30px] justify-center lg:space-x-[110px] lg:px-[140px] lg:text-[23px]">
				<div className="font-semibold lg:space-x-2">
					<span className="fa fa-cloud text-slate-400"></span>
					<span className="text-slate-400">TUPLE</span>
				</div>
				<div className="font-semibold lg:space-x-2">
					<span className="fa fa-connectdevelop text-slate-400"></span>
					<span className=" text-slate-400">Mirage</span>
				</div>
				<div className="font-semibold lg:space-x-2">
					<span className="fa fa-codepen text-slate-400"></span>
					<span className=" text-slate-400">StaticKit</span>
				</div>
				<div className="font-semibold lg:space-x-2">
					<span className="fa fa-cube text-slate-400"></span>
					<span className=" text-slate-400">Transistor</span>
				</div>
				<div className="font-semibold lg:space-x-2">
					<span className="fa fa-empire text-slate-400"></span>
					<span className=" text-slate-400">Workcation</span>
				</div>
			</div>
			<div className="flex flex-col-reverse py-[80px] font-['Poppins'] tracking-wide bg-[#f9fbfc] px-[40px] lg:px-[200px] lg:flex-row">
				<div className="hidden space-y-5 font-semibold basis-1/4 mr-5 text-[20px] text-zinc-700 lg:block">
					<div className="p-5 space-y-4 bg-white">
						<img src={completefoto} className="w-[65%]" alt=""></img>
						<h2>Complete Your Profile</h2>
						<span className="w-full text-right fa fa-long-arrow-right text-[23px]"></span>
					</div>
					<div className="p-5 space-y-4 bg-white">
						<img src={interviewfoto} className="w-[65%]" alt=""></img>
						<h2>Interviewed & waiting</h2>
						<span className="w-full text-right fa fa-long-arrow-right text-[23px]"></span>
					</div>
				</div>
				<div className="hidden space-y-5 font-semibold basis-1/4 text-[20px] text-zinc-700 lg:block">
					<div className="p-5 space-y-4 bg-white">
						<img src={findfoto} className="w-[65%]" alt=""></img>
						<h2>Search and register</h2>
						<span className="w-full text-right fa fa-long-arrow-right text-[23px]"></span>
					</div>
					<div className="p-5 space-y-4 bg-white">
						<img src={workfoto} className="w-[65%]" alt=""></img>
						<h2>Pass & start to work</h2>
						<span className="w-full text-right fa fa-long-arrow-right text-[23px]"></span>
					</div>
				</div>
				<div className="flex flex-col my-auto space-y-6 basis-1/2 ml-[0px] lg:ml-[140px]">
					<h1 className="font-bold text-[30px] lg:text-[40px]">
						How you will be hired
					</h1>
					<span className="text-gray-500 text-[13px]">
						Lorem reprehenderit occaecat dolor laboris minim veniam consequat
						occaecat ipsum Lorem. Veniam adipisicing incididunt fugiat amet
						Lorem non ipsum irure culpa elit non. Et excepteur consequat culpa
						labore cupidatat. Qui nostrud sunt Lorem enim eiusmod fugiat tempor.
						Non Lorem id quis laboris.
					</span>
					<button className="px-4 py-3 font-semibold text-[#f26622] bg-transparent border border-[#f26622] rounded hover:bg-[#f26622] hover:text-white hover:border-transparent w-[40%] text-[12px] lg:w-[30%] lg:text-[14px]">
						Read More
					</button>
				</div>
			</div>
			<div className="flex flex-col-reverse py-[80px] px-[40px] font-['Poppins'] tracking-wide lg:flex-row lg:px-[200px]">
				<div className="flex flex-col w-full lg:w-[40%] space-y-5">
					<h1 className="font-bold text-[28px] lg:text-[40px]">
						We help you to get your dream job
					</h1>
					<span className="text-gray-500 text-[13px]">
						Lorem reprehenderit occaecat dolor laboris minim veniam consequat
						occaecat ipsum Lorem. Veniam adipisicing incididunt fugiat amet
						Lorem non ipsum irure culpa elit non. Et excepteur consequat culpa
						labore cupidatat. Qui nostrud sunt Lorem enim eiusmod fugiat tempor.
						Non Lorem id quis laboris.
					</span>
					<button className="px-4 py-3 font-bold text-white bg-[#f26622] rounded hover:bg-orange-600 w-[40%] text-[12px] lg:text-[14px] lg:w-[30%] shadow-lg shadow-[#f26622]">
						Read More
					</button>
				</div>
				<img src={helpfoto} alt="" className="w-full lg:w-[46%] ml-auto"></img>
			</div>
			<div className="mx-auto py-[80px]  bg-[#f9fbfc] font-['Poppins] px-[40px] lg:px-[200px]">
				<div className="text-center">
					<h1 className="text-[28px] lg:text-[40px] font-bold mb-5">
						Recent Job Posted
					</h1>
					<span className="text-gray-500 text-[13px] mb-10">
						Eu irure velit aliquip reprehenderit ullamco mollit Non qui velit
						adipisicing
						<p>nisi excepteur esse amet enim mollit.</p>
					</span>
				</div>
				<div className="grid grid-cols-1 gap-3 mt-10 lg:grid-cols-3 lg:gap-7 place-content-center drop-shadow-2xl">
					{data !== null &&
						data.map((res) => {
							return (
								<div className="flex flex-col p-8 space-y-4 bg-white rounded-lg">
									<img
										src={res.company_image_url}
										className="w-[40%] lg:w-[20%]"
										alt={res.company_name}
									></img>
									<h2 className="font-semibold text-[18px]">{res.title}</h2>
									<div className="flex flex-row space-x-2">
										<div className="p-[10px] text-green-500 border-2 rounded-full w-[30%] text-center text-[13px] font-semibold">
											<span>{res.job_tenure}</span>
										</div>
										<div className="p-[10px] text-sky-500 border-2 rounded-full w-[30%] text-center text-[13px] font-semibold">
											<span>{res.job_type}</span>
										</div>
									</div>
									<span className="text-gray-400 text-[13px]">
										{res.job_description.length > 150
											? `${res.job_description.substring(0, 150)}...`
											: res.job_description}
									</span>
									<div className="flex flex-row space-x-2">
										<span className="text-[16px] text-gray-500">Rp.</span>
										<span className="text-gray-700">
											{res.salary_min}-{res.salary_max}
											<span className="text-[12px] text-gray-400">
												{" "}
												/ Per Mounth
											</span>
										</span>
									</div>
									<div className="flex flex-row space-x-3 text-gray-500">
										<span className="fa fa-map-marker text-[20px] text-gray-500"></span>
										<span className="text-gray-400">{res.company_city}</span>
									</div>
									<button className="py-2 font-semibold text-[#f26622] bg-transparent border border-[#f26622] rounded hover:bg-[#f26622] hover:text-white hover:border-transparent w-full text-[12px] lg:text-[15px]">
										Apply
									</button>
								</div>
							);
						})}
				</div>
			</div>
		</>
	);
}

export default Dashboard;
