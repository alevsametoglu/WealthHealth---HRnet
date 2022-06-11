import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { FormControl } from "..";
import { employeeAction } from "../../Redux/employee";

import "./CreateForm.scss";
const department = [
  {
    value: " ",
    label: "",
  },
  {
    value: "sales",
    label: "Sales",
  },

  { value: "marketing", label: "Marketing" },

  { value: "engineering", label: "Engineeering" },

  {
    value: "human resources",
    label: "Human Resources",
  },

  { value: "legal", label: "Legal" },
];

const states = [
  {
    label: "",
    value: "--",
    abbrev: "",
  },
  {
    label: "Alabama",
    value: "AL",
    abbrev: "AL",
  },
  {
    label: "Alaska",
    value: "AK",
    abbrev: "AK",
  },
  {
    label: "American Samoa",
    value: "AS",
    abbrev: "AS",
  },
  {
    label: "Arizona",
    value: "AZ",
    abbrev: "AZ",
  },
  {
    label: "Arkansas",
    value: "AR",
    abbrev: "AR",
  },
  {
    label: "California",
    value: "CA",
    abbrev: "CA",
  },
  {
    label: "Colorado",
    value: "CO",
    abbrev: "CO",
  },
  {
    label: "Connecticut",
    value: "CT",
    abbrev: "CT",
  },
  {
    label: "Delaware",
    value: "DE",
    abbrev: "DE",
  },
  {
    label: "District Of Columbia",
    value: "DC",
    abbrev: "DC",
  },
  {
    label: "Federated States Of Micronesia",
    value: "FM",
    abbrev: "FM",
  },
  {
    label: "Florida",
    value: "FL",
    abbrev: "FL",
  },
  {
    label: "Georgia",
    value: "GA",
    abbrev: "GA",
  },
  {
    label: "Guam",
    value: "GU",
    abbrev: "GU",
  },
  {
    label: "Hawaii",
    value: "HI",
    abbrev: "HI",
  },
  {
    label: "Idaho",
    value: "ID",
    abbrev: "ID",
  },
  {
    label: "Illinois",
    value: "IL",
    abbrev: "IL",
  },
  {
    label: "Indiana",
    value: "IN",
    abbrev: "IN",
  },
  {
    label: "Iowa",
    value: "IA",
    abbrev: "IA",
  },
  {
    label: "Kansas",
    value: "KS",
    abbrev: "KS",
  },
  {
    label: "Kentucky",
    value: "KY",
    abbrev: "KY",
  },
  {
    label: "Louisiana",
    value: "LA",
    abbrev: "LA",
  },
  {
    label: "Maine",
    value: "ME",
    abbrev: "ME",
  },
  {
    label: "Marshall Islands",
    value: "MH",
    abbrev: "MH",
  },
  {
    label: "Maryland",
    value: "MD",
    abbrev: "MD",
  },
  {
    label: "Massachusetts",
    value: "MA",
    abbrev: "MA",
  },
  {
    label: "Michigan",
    value: "MI",
    abbrev: "MI",
  },
  {
    label: "Minnesota",
    value: "MN",
    abbrev: "MN",
  },
  {
    label: "Mississippi",
    value: "MS",
    abbrev: "MS",
  },
  {
    label: "Missouri",
    value: "MO",
    abbrev: "MO",
  },
  {
    label: "Montana",
    value: "MT",
    abbrev: "MT",
  },
  {
    label: "Nebraska",
    value: "NE",
    abbrev: "NE",
  },
  {
    label: "Nevada",
    value: "NV",
    abbrev: "NV",
  },
  {
    label: "New Hampshire",
    value: "NH",
    abbrev: "NH",
  },
  {
    label: "New Jersey",
    value: "NJ",
    abbrev: "NJ",
  },
  {
    label: "New Mexico",
    value: "NM",
    abbrev: "NM",
  },
  {
    label: "New York",
    value: "NY",
    abbrev: "NY",
  },
  {
    label: "North Carolina",
    value: "NC",
    abbrev: "NC",
  },
  {
    label: "North Dakota",
    value: "ND",
    abbrev: "ND",
  },
  {
    label: "Northern Mariana Islands",
    value: "MP",
    abbrev: "MP",
  },
  {
    label: "Ohio",
    value: "OH",
    abbrev: "OH",
  },
  {
    label: "Oklahoma",
    value: "OK",
    abbrev: "OK",
  },
  {
    label: "Oregon",
    value: "OR",
    abbrev: "OR",
  },
  {
    label: "Palau",
    value: "PW",
    abbrev: "PW",
  },
  {
    label: "Pennsylvania",
    value: "PA",
    abbrev: "PA",
  },
  {
    label: "Puerto Rico",
    value: "PR",
    abbrev: "PR",
  },
  {
    label: "Rhode Island",
    value: "RI",
    abbrev: "RI",
  },
  {
    label: "South Carolina",
    value: "SC",
    abbrev: "SC",
  },
  {
    label: "South Dakota",
    value: "SD",
    abbrev: "SD",
  },
  {
    label: "Tennessee",
    value: "TN",
    abbrev: "TN",
  },
  {
    label: "Texas",
    value: "TX",
    abbrev: "TX",
  },
  {
    label: "Utah",
    value: "UT",
    abbrev: "UT",
  },
  {
    label: "Vermont",
    value: "VT",
    abbrev: "VT",
  },
  {
    label: "Virgin Islands",
    value: "VI",
    abbrev: "VI",
  },
  {
    label: "Virginia",
    value: "VA",
    abbrev: "VA",
  },
  {
    label: "Washington",
    value: "WA",
    abbrev: "WA",
  },
  {
    label: "West Virginia",
    value: "WV",
    abbrev: "WV",
  },
  {
    label: "Wisconsin",
    value: "WI",
    abbrev: "WI",
  },
  {
    label: "Wyoming",
    value: "WY",
    abbrev: "WY",
  },
];

const CreateForm = () => {
  const dispatch = useDispatch();

  const { handleSubmit, control, reset } = useForm({});
  const submitForm = (formValue) => {
    const selectedState = states.find(
      (state) => state.value === formValue.stateAbbrev
    );

    console.log(selectedState);
    dispatch(
      employeeAction.addEmployee({
        ...formValue,
        dateOfBirth: formValue.dateOfBirth.toLocaleDateString(),
        startDate: formValue.startDate.toLocaleDateString(),
        state: selectedState.label,
      })
    );
    reset();
  };

  return (
    <div className="container-form">
      <form className="create-form" onSubmit={handleSubmit(submitForm)}>
        <div className="form">
          <div className="information">
            <span className="title-form">Informations</span>
            <FormControl
              control={control}
              name="firstName"
              inputType="input"
              label="First Name"
              placeholder=" first name"
              rules={{ required: true }}
              style={{ width: 200 }}
              aria="fistName"
            />
            <FormControl
              control={control}
              name="lastName"
              inputType="input"
              label="Last name"
              placeholder=" first name"
              rules={{ required: true }}
              style={{}}
              aria="lastName"
            />

            <FormControl
              control={control}
              name="dateOfBirth"
              inputType="date-picker"
              label="Birth date"
              placeholder=""
              rules={{ required: true, min: new Date(2020, 0, 1) }}
              style={{}}
              aria="birth date"
            />
            <FormControl
              control={control}
              name="startDate"
              inputType="date-picker"
              label="Start date"
              placeholder=""
              rules={{ required: true, max: new Date(2022, 6, 0) }}
              style={{}}
              aria="start date"
            />
            <FormControl
              control={control}
              name="department"
              inputType="select"
              label="Department"
              placeholder=""
              rules={{ required: false }}
              options={department}
              style={{}}
              aria="department"
            />
          </div>
          <div className="address">
            <span className="title-form">Address</span>
            <FormControl
              control={control}
              name="street" //{["address", "street"]}
              inputType="input"
              label="Street"
              placeholder=""
              rules={{ required: true }}
              style={{}}
              aria="street"
            />
            <FormControl
              control={control}
              name="city"
              inputType="input"
              label="City"
              placeholder=""
              rules={{ required: true }}
              style={{}}
              aria="city"
            />

            <FormControl
              control={control}
              name="stateAbbrev"
              inputType="select"
              label="State"
              placeholder=""
              rules={{ required: false }}
              options={states}
              style={{}}
              aria="state"
            />
            <FormControl
              control={control}
              name="zipCode"
              inputType="number-input"
              label="Zip Code"
              placeholder=""
              rules={{ required: true }}
              style={{}}
              aria="zipCode"
            />
          </div>
        </div>
        <button className="save-button" type="submit" aria-label="save button">
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
