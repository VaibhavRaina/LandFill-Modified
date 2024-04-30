import React from "react";
import "./OverviewSection.css";
import { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { v4 as uuidv4 } from 'uuid';


export const OverviewSection = (props) => {
  const [areaUnit, setAreaUnit] = useState('sq m');
  const [originalArea, setOriginalArea] = useState(props.items.area); // Store the original area value
  const carouselId = uuidv4();

  const handleChange = (event) => {
    const selectedUnit = event.target.value;
    let newArea = 0;

    switch (selectedUnit) {
      case 'sq m':
        newArea = originalArea; // Use the original area value for conversions
        break;
      case 'bigha':
        newArea = originalArea * 0.0004;
        break;
      case 'acre':
        newArea = originalArea * 0.000247105;
        break;
      case 'hectare':
        newArea = originalArea * 0.0001;
        break;
      default:
        newArea = originalArea;
    }

    setAreaUnit(selectedUnit);
    props.items.area = newArea;

  };
  return (

    <>
      <div className="overview-section">

        {/* 
        <div className="image">
          <div id={`carouselExample`} className="carousel-slide">
            <div className="carousel-inner">
              {props.items.images.map((image, index) => (
                <div key={uuidv4()} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img className="additional-image" alt={image.filename} src={image.url} />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExample`} data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#carouselExample`} data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div> */}

        <div className="image">
          <div style={{ height: "10rem" }} id="carouselExample" className="carousel slide ">
            <div className="carousel-inner">
              {props.items.images.map((img, i) => (
                <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                  <img style={{ height: "30rem", borderRadius: "10px" }} src={img.url} className="d-block w-100" alt="..." />
                </div>
              ))}
            </div>
            <button style={{ height: "30rem" }} className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button style={{ height: "30rem" }} className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>








        <div className="details-card-holder-wrapper1">
          <div className="details-card-holder-2">
            <div className="heading-2">
              <img className="img" alt="Layer" src="/dimmensions-image.svg" />
              <div className="text-wrapper-4">Dimension</div>
            </div>
            <div className="flexcontainer-wrapper">
              <div className="flexcontainer">
                <p className="text-i">
                  <span className="text-wrapper-5">
                    {(props.items.length !== 0 && props.items.breadth !== 0) ? (
                      <span>
                        <div className="dim">l x b : {props.items.length} mt. ({(props.items.length * 3.28084).toFixed(1)} ft.) x {props.items.breadth} mt ({(props.items.breadth * 3.28084).toFixed(1)} ft.)</div>
                        <span style={{ fontSize: "17px" }}><b>Plot Area {props.items.area.toFixed(2)}</b></span>
                      </span>
                    ) : (
                      <span>
                        <div style={{ padding: "10px", color: "#E52B50" }}><b>Due to IRREGULAR size of land, <br />Length and Breadth can not be comprehended</b></div>
                        <span style={{ fontSize: "20px" }}><b>Plot Area {props.items.area.toFixed(2)}</b></span>

                      </span>
                    )}

                    <span>
                      <FormControl sx={{ m: -1.95, marginLeft: -1 }}>
                        <InputLabel id="demo-simple-select-label"></InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Area"
                          value={areaUnit}
                          onChange={handleChange}

                          sx={{ '.MuiOutlinedInput-notchedOutline': { borderStyle: 'none' } }}
                        >
                          <MenuItem value={'sq m'}><span className="convert">Sq.m</span> </MenuItem>
                          <MenuItem value={'bigha'}><span className="convert">Bigha</span></MenuItem>
                          <MenuItem value={'acre'}><span className="convert">Acre</span></MenuItem>
                          <MenuItem value={'hectare'}><span className="convert">Hectare</span></MenuItem>
                        </Select>
                      </FormControl>
                    </span>
                    <br />
                  </span>
                </p>
                <p className="text-i">
                </p>
              </div>
            </div>
          </div>
        </div>



        <div className="details-card-holder-wrapper2">
          <div className="details-card-holder-2">
            <div className="heading-2">
              <img className="img" alt="Layer" src="/layer-1.svg" />
              <div className="text-wrapper-4">Address </div>
            </div>
            <div className="flexcontainer-wrapper">
              <div className="flexcontainer">
                <p className="text-i">
                  <span className="text-wrapper-5">
                    {props.items.plot} {props.items.street} {props.items.village} <br />  {props.items.city} {props.items.landmark}<br /> {props.items.state}<br /> {props.items.pincode} {props.items.country}
                    <br />
                  </span>
                </p>
                <p className="text-i">
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="details-card-holder-wrapper3">
          <div className="details-card-holder-2">
            <div className="heading-2">
              <img className="img" alt="Layer" src="/frame.svg" />
              <div className="text-wrapper-4">Possession</div>
            </div>
            <div className="flexcontainer-wrapper">
              <div className="flexcontainer">
                <p className="text-i">
                  <span className="text-wrapper-5">
                    {props.items.possession}
                    <br />
                  </span>
                </p>
                <p className="text-i">
                </p>
              </div>
            </div>
          </div>
        </div>



        <div className="details-card-holder-wrapper4">
          <div className="details-card-holder-2">
            <div className="heading-2">
              <img className="img" alt="Layer" src="/gate.svg" />
              <div className="text-wrapper-4">Number of Gates</div>
            </div>
            <div className="flexcontainer-wrapper">
              <div className="flexcontainer">
                <p className="text-i">
                  <span className="text-wrapper-5">
                    {props.items.gates}
                    <br />
                  </span>
                </p>
                <p className="text-i">
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="details-card-holder-wrapper5">
          <div className="details-card-holder-2">
            <div className="heading-2">
              <img className="img" alt="Layer" src="/layer-1-2.svg" />
              <div className="text-wrapper-4">Boundary Wall</div>
            </div>
            <div className="flexcontainer-wrapper">
              <div className="flexcontainer">
                <p className="text-i">
                  <span className="text-wrapper-5">
                    {props.items.wall}
                    <br />
                  </span>
                </p>
                <p className="text-i">
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="details-card-holder-wrapper6">
          <div className="details-card-holder-21">
            <div className="heading-2">
              <img className="img" alt="Layer" src="/layer-1-3.svg" />
              <div className="text-wrapper-4">Price</div>
            </div>
            <div className="flexcontainer-wrapper">
              <div className="flexcontainer">
                <span className="text-wrapper-5">
                  <b style={{ fontSize: "1rem" }}>₹{props.items.price}</b>
                </span>
                <span className="text-wrapper-6">@per night</span>
              </div>
            </div>
          </div>
        </div>





        <div className="details-card-3" layer="/layer-1-4.svg" type="boundary-wall" ></div>
        <div className="details-card-4" img="/layer-1-5.svg" type="address" ></div>
      </div>
    </>
  );
};
export default OverviewSection;
