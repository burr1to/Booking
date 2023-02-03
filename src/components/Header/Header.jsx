import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import {
  faCar,
  faHotel,
  faPlane,
  faBed,
  faSearch,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/header.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

export default function Header({ type }) {
  const [open, setOpen] = useState(false);

  const [personOpen, setPersonOpen] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [number, setNumber] = useState(false);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <div className='header'>
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className='headerList'>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faHotel} />
            <span>Apartments</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faCar} />
            <span>Cars</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faBed} />
            <span>Hotels</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className='headerTitle'>
              A lifetime of discounts? It's Genius!!
            </h1>
            <p className='headerDesc'>
              Search deals on hotels, homes, and much more...
            </p>
            <button className='headerBtn'>Sign In</button>
            <div className='headerSearch'>
              <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faBed} className='headerIcon' />
                <input
                  type='text'
                  placeholder='Where are you going?'
                  className='headerSearchInput'
                />
              </div>
              <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faCalendar} className='headerIcon' />
                <span
                  onClick={() => {
                    setOpen(!open);
                  }}
                  className='headerSearchText'
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {open && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className='date'
                  />
                )}
              </div>

              <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faPerson} className='headerIcon' />

                <span
                  onClick={() => {
                    setPersonOpen(!personOpen);
                  }}
                  className='headerSearchText'
                >{`${options.adult} Adults . ${options.children} Children . ${options.room} Rooms`}</span>

                {personOpen && (
                  <div className='options'>
                    <div className='optionItem'>
                      <span className='optionText'>Adult</span>
                      <div className='optionCounter'>
                        <button
                          disabled={options.adult < 1}
                          className='optionCounterButton'
                          onClick={() => {
                            handleOption("adult", "d");
                          }}
                        >
                          -
                        </button>
                        <span className='optionCounterNumber'>
                          {options.adult}
                        </span>
                        <button
                          className='optionCounterButton'
                          onClick={() => {
                            handleOption("adult", "i");
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className='optionItem'>
                      <span className='optionText'>Children</span>
                      <div className='optionCounter'>
                        <button
                          disabled={options.children < 1}
                          className='optionCounterButton'
                          onClick={() => {
                            handleOption("children", "d");
                          }}
                        >
                          -
                        </button>
                        <span className='optionCounterNumber'>
                          {options.children}
                        </span>
                        <button
                          className='optionCounterButton'
                          onClick={() => {
                            handleOption("children", "i");
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className='optionItem'>
                      <span className='optionText'>Room</span>
                      <div className='optionCounter'>
                        <button
                          disabled={options.room < 1}
                          className='optionCounterButton'
                          onClick={() => {
                            handleOption("room", "d");
                          }}
                        >
                          -
                        </button>
                        <span className='optionCounterNumber'>
                          {options.room}
                        </span>
                        <button
                          className='optionCounterButton'
                          onClick={() => {
                            handleOption("room", "i");
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className='headerSearchItem'>
                <button className='headerSearchButton'>Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
