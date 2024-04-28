import { useEffect, useState } from "react";

import DatePicker from "react-datepicker";
// import chevron from "../../assets/titlebar/chevron.svg";
import search from "../../assets/cases/search.svg";
import filter from "../../assets/cases/filter.svg";
import "react-datepicker/dist/react-datepicker.css";
// import { format } from "date-fns";
import UpcomingTasksContainer from "./../../components/upcomingTasks/UpcomingTasksContainer";
import { useGetUpcomingTasksQuery } from "../../service/upcomingTask.service";

const UpcomingTasks = () => {
  const { data: upcomingtask } = useGetUpcomingTasksQuery();
  console.log("Upcoming: ", upcomingtask?.data);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const myTasks = [];
    for (let i = 0; i < upcomingtask?.data?.length; i++) {
      for (let j = 0; j < upcomingtask?.data[i].upcoming_task.length; j++) {
        myTasks.push(upcomingtask?.data[i].upcoming_task[j]);
      }
    }
    setTasks(myTasks);
  }, [upcomingtask]);

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <div className="p-20 bg-white">
      {/* Second Section */}
      <div className="flex font-poppins mb-2 gap-5 items-end">
        <div>
          <p>Date:</p>
          <div className="flex gap-5 mt-2 items-center justify-between">
            <div className="flex w-[clamp(240px,100%,303px)] text-sm text-project-light-black whitespace-nowrap">
              <DatePicker
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                  setDateRange(update);
                }}
                className="custom-font"
                withPortal
                placeholderText="Select Date Range"
                dateFormat={"dd-MM-yyyy"}
                showIcon
                icon={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex justify-center items-center"
                  >
                    <path
                      d="M4.5 1C4.77614 1 5 1.22386 5 1.5V2H10V1.5C10 1.22386 10.2239 1 10.5 1C10.7761 1 11 1.22386 11 1.5V2H12.5C13.3284 2 14 2.67157 14 3.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V3.5C1 2.67157 1.67157 2 2.5 2H4V1.5C4 1.22386 4.22386 1 4.5 1ZM10 3V3.5C10 3.77614 10.2239 4 10.5 4C10.7761 4 11 3.77614 11 3.5V3H12.5C12.7761 3 13 3.22386 13 3.5V5H2V3.5C2 3.22386 2.22386 3 2.5 3H4V3.5C4 3.77614 4.22386 4 4.5 4C4.77614 4 5 3.77614 5 3.5V3H10ZM2 6V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V6H2ZM7 7.5C7 7.22386 7.22386 7 7.5 7C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8C7.22386 8 7 7.77614 7 7.5ZM9.5 7C9.22386 7 9 7.22386 9 7.5C9 7.77614 9.22386 8 9.5 8C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7ZM11 7.5C11 7.22386 11.2239 7 11.5 7C11.7761 7 12 7.22386 12 7.5C12 7.77614 11.7761 8 11.5 8C11.2239 8 11 7.77614 11 7.5ZM11.5 9C11.2239 9 11 9.22386 11 9.5C11 9.77614 11.2239 10 11.5 10C11.7761 10 12 9.77614 12 9.5C12 9.22386 11.7761 9 11.5 9ZM9 9.5C9 9.22386 9.22386 9 9.5 9C9.77614 9 10 9.22386 10 9.5C10 9.77614 9.77614 10 9.5 10C9.22386 10 9 9.77614 9 9.5ZM7.5 9C7.22386 9 7 9.22386 7 9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5C8 9.22386 7.77614 9 7.5 9ZM5 9.5C5 9.22386 5.22386 9 5.5 9C5.77614 9 6 9.22386 6 9.5C6 9.77614 5.77614 10 5.5 10C5.22386 10 5 9.77614 5 9.5ZM3.5 9C3.22386 9 3 9.22386 3 9.5C3 9.77614 3.22386 10 3.5 10C3.77614 10 4 9.77614 4 9.5C4 9.22386 3.77614 9 3.5 9ZM3 11.5C3 11.2239 3.22386 11 3.5 11C3.77614 11 4 11.2239 4 11.5C4 11.7761 3.77614 12 3.5 12C3.22386 12 3 11.7761 3 11.5ZM5.5 11C5.22386 11 5 11.2239 5 11.5C5 11.7761 5.22386 12 5.5 12C5.77614 12 6 11.7761 6 11.5C6 11.2239 5.77614 11 5.5 11ZM7 11.5C7 11.2239 7.22386 11 7.5 11C7.77614 11 8 11.2239 8 11.5C8 11.7761 7.77614 12 7.5 12C7.22386 12 7 11.7761 7 11.5ZM9.5 11C9.22386 11 9 11.2239 9 11.5C9 11.7761 9.22386 12 9.5 12C9.77614 12 10 11.7761 10 11.5C10 11.2239 9.77614 11 9.5 11Z"
                      fill="#000000"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                }
              />
              {/* divider */}
              {/* <div className="h-1 w-4 rounded-lg bg-project-blue mx-2 my-auto" /> */}

              {/* date to */}
              {/* <button
                aria-label="To date"
                className="bg-white flex flex-1 gap-2 items-center justify-between p-3 py-2"
              >
                <p>10-10-2021</p>
                <img src={chevron} />
              </button> */}
            </div>
          </div>
        </div>
        <div className="h-fit bg-white relative">
          <input
            type="text"
            className="p-3 py-2 pl-2 pr-8 w-[clamp(200px,100%,280px)] placeholder:text-project-light-black outline-project-blue text-sm"
            placeholder="Search"
          />
          <img
            src={search}
            className="absolute top-1/2 -translate-y-1/2 right-2"
          />
        </div>
        <button
          aria-label="Filter"
          className="p-2 hover:bg-project-gray-2 rounded-md"
        >
          <img src={filter} className="h-5" />
        </button>
      </div>

      {/* {upcomingtask?.data?.upcoming_task.map((task, id) => ( */}
      {tasks &&
        tasks.map((task, id) => (
          <UpcomingTasksContainer key={id} task={task} />
        ))}

      {/* {upcomingtask?.data?.map((up) => {
        up.upcoming_task.map((task, id) => (
          <UpcomingTasksContainer key={id} task={task} />
        ));
      })} */}
    </div>
  );
};

export default UpcomingTasks;
