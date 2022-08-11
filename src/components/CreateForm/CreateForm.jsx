import { addYears } from 'date-fns';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { FormControl } from '..';
import { employeeAction } from '../../Redux/employee';
import { Modal } from 'alev-modal';
import logo from '../Header/logo.png';
import './CreateForm.scss';

const department = [
  {
    value: ' ',
    label: '',
  },
  {
    value: 'sales',
    label: 'Sales',
  },

  { value: 'marketing', label: 'Marketing' },

  { value: 'engineering', label: 'Engineeering' },

  {
    value: 'human resources',
    label: 'Human Resources',
  },

  { value: 'legal', label: 'Legal' },
];

const states = [
  {
    label: '',
    value: '--',
    abbrev: '',
  },
  {
    label: 'Alabama',
    value: 'AL',
    abbrev: 'AL',
  },
  {
    label: 'Alaska',
    value: 'AK',
    abbrev: 'AK',
  },
  {
    label: 'American Samoa',
    value: 'AS',
    abbrev: 'AS',
  },
  {
    label: 'Arizona',
    value: 'AZ',
    abbrev: 'AZ',
  },
  {
    label: 'Arkansas',
    value: 'AR',
    abbrev: 'AR',
  },
  {
    label: 'California',
    value: 'CA',
    abbrev: 'CA',
  },
  {
    label: 'Colorado',
    value: 'CO',
    abbrev: 'CO',
  },
  {
    label: 'Connecticut',
    value: 'CT',
    abbrev: 'CT',
  },
  {
    label: 'Delaware',
    value: 'DE',
    abbrev: 'DE',
  },
  {
    label: 'District Of Columbia',
    value: 'DC',
    abbrev: 'DC',
  },
  {
    label: 'Federated States Of Micronesia',
    value: 'FM',
    abbrev: 'FM',
  },
  {
    label: 'Florida',
    value: 'FL',
    abbrev: 'FL',
  },
  {
    label: 'Georgia',
    value: 'GA',
    abbrev: 'GA',
  },
  {
    label: 'Guam',
    value: 'GU',
    abbrev: 'GU',
  },
  {
    label: 'Hawaii',
    value: 'HI',
    abbrev: 'HI',
  },
  {
    label: 'Idaho',
    value: 'ID',
    abbrev: 'ID',
  },
  {
    label: 'Illinois',
    value: 'IL',
    abbrev: 'IL',
  },
  {
    label: 'Indiana',
    value: 'IN',
    abbrev: 'IN',
  },
  {
    label: 'Iowa',
    value: 'IA',
    abbrev: 'IA',
  },
  {
    label: 'Kansas',
    value: 'KS',
    abbrev: 'KS',
  },
  {
    label: 'Kentucky',
    value: 'KY',
    abbrev: 'KY',
  },
  {
    label: 'Louisiana',
    value: 'LA',
    abbrev: 'LA',
  },
  {
    label: 'Maine',
    value: 'ME',
    abbrev: 'ME',
  },
  {
    label: 'Marshall Islands',
    value: 'MH',
    abbrev: 'MH',
  },
  {
    label: 'Maryland',
    value: 'MD',
    abbrev: 'MD',
  },
  {
    label: 'Massachusetts',
    value: 'MA',
    abbrev: 'MA',
  },
  {
    label: 'Michigan',
    value: 'MI',
    abbrev: 'MI',
  },
  {
    label: 'Minnesota',
    value: 'MN',
    abbrev: 'MN',
  },
  {
    label: 'Mississippi',
    value: 'MS',
    abbrev: 'MS',
  },
  {
    label: 'Missouri',
    value: 'MO',
    abbrev: 'MO',
  },
  {
    label: 'Montana',
    value: 'MT',
    abbrev: 'MT',
  },
  {
    label: 'Nebraska',
    value: 'NE',
    abbrev: 'NE',
  },
  {
    label: 'Nevada',
    value: 'NV',
    abbrev: 'NV',
  },
  {
    label: 'New Hampshire',
    value: 'NH',
    abbrev: 'NH',
  },
  {
    label: 'New Jersey',
    value: 'NJ',
    abbrev: 'NJ',
  },
  {
    label: 'New Mexico',
    value: 'NM',
    abbrev: 'NM',
  },
  {
    label: 'New York',
    value: 'NY',
    abbrev: 'NY',
  },
  {
    label: 'North Carolina',
    value: 'NC',
    abbrev: 'NC',
  },
  {
    label: 'North Dakota',
    value: 'ND',
    abbrev: 'ND',
  },
  {
    label: 'Northern Mariana Islands',
    value: 'MP',
    abbrev: 'MP',
  },
  {
    label: 'Ohio',
    value: 'OH',
    abbrev: 'OH',
  },
  {
    label: 'Oklahoma',
    value: 'OK',
    abbrev: 'OK',
  },
  {
    label: 'Oregon',
    value: 'OR',
    abbrev: 'OR',
  },
  {
    label: 'Palau',
    value: 'PW',
    abbrev: 'PW',
  },
  {
    label: 'Pennsylvania',
    value: 'PA',
    abbrev: 'PA',
  },
  {
    label: 'Puerto Rico',
    value: 'PR',
    abbrev: 'PR',
  },
  {
    label: 'Rhode Island',
    value: 'RI',
    abbrev: 'RI',
  },
  {
    label: 'South Carolina',
    value: 'SC',
    abbrev: 'SC',
  },
  {
    label: 'South Dakota',
    value: 'SD',
    abbrev: 'SD',
  },
  {
    label: 'Tennessee',
    value: 'TN',
    abbrev: 'TN',
  },
  {
    label: 'Texas',
    value: 'TX',
    abbrev: 'TX',
  },
  {
    label: 'Utah',
    value: 'UT',
    abbrev: 'UT',
  },
  {
    label: 'Vermont',
    value: 'VT',
    abbrev: 'VT',
  },
  {
    label: 'Virgin Islands',
    value: 'VI',
    abbrev: 'VI',
  },
  {
    label: 'Virginia',
    value: 'VA',
    abbrev: 'VA',
  },
  {
    label: 'Washington',
    value: 'WA',
    abbrev: 'WA',
  },
  {
    label: 'West Virginia',
    value: 'WV',
    abbrev: 'WV',
  },
  {
    label: 'Wisconsin',
    value: 'WI',
    abbrev: 'WI',
  },
  {
    label: 'Wyoming',
    value: 'WY',
    abbrev: 'WY',
  },
];

/**
 * @description création component CreateForm
 * @component
 *
 * @returns {Reactnode}   jsx injected in DOM
 */
const CreateForm = () => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const { handleSubmit, reset, register, formState } = useForm({
    defaultValues: {
      startDate: null,
      dateOfBirth: null,
    },
  });
  const submitForm = formValue => {
    console.log(formValue);
    const selectedState = states.find(
      state => state.value === formValue.stateAbbrev,
    );

    console.log(selectedState);
    dispatch(
      employeeAction.addEmployee({
        ...formValue,
        dateOfBirth: formValue.dateOfBirth.toLocaleDateString(),
        startDate: formValue.startDate.toLocaleDateString(),
        state: selectedState.label,
      }),
    );
    setShowModal(true);
    reset();
  };

  return (
    <div className="container-form">
      <Modal
        image={logo}
        width="400px"
        onClose={() => {
          setShowModal(false);
          console.log('close event fired');
        }}
        show={showModal}
        title="Succes"
        text="New employe has been created"
      />
      <form className="create-form" onSubmit={handleSubmit(submitForm)}>
        <div className="form">
          <div className="information">
            <span className="title-form">Informations</span>

            <FormControl
              name="firstName"
              inputType="input"
              label="First Name"
              placeholder="first name"
              style={{ width: 200 }}
              aria="fist name"
              formState={formState}
              register={register('firstName', { required: true })}
            />
            <FormControl
              formState={formState}
              name="lastName"
              inputType="input"
              label="Last name"
              placeholder=" first name"
              aria="last name"
              register={register('lastName', { required: true })}
            />

            <FormControl
              formState={formState}
              name="dateOfBirth"
              inputType="date-picker"
              label="Birth date"
              aria="birth date"
              register={register('dateOfBirth', {
                required: true,
                valueAsDate: true,
                max: {
                  value: addYears(new Date(), -18),
                  message: 'you must be older then 18 ',
                },
              })}
            />
            <FormControl
              formState={formState}
              name="startDate"
              inputType="date-picker"
              label="Start date"
              aria="start date"
              register={register('startDate', {
                required: true,
                valueAsDate: true,
              })}
            />
            <FormControl
              formState={formState}
              name="department"
              inputType="select"
              label="Department"
              placeholder=""
              options={department}
              aria="department"
              register={register('department')}
            />
          </div>
          <div className="address">
            <span className="title-form">Address</span>
            <FormControl
              formState={formState}
              name="street" //{["address", "street"]}
              inputType="input"
              label="Street"
              aria="street"
              register={register('street', { required: true })}
            />
            <FormControl
              formState={formState}
              name="city"
              inputType="input"
              label="City"
              aria="city"
              register={register('city', { required: true })}
            />
            <FormControl
              formState={formState}
              name="stateAbbrev"
              inputType="select"
              label="State"
              options={states}
              aria="state"
              register={register('stateAbbrev')}
            />
            <FormControl
              formState={formState}
              name="zipCode"
              inputType="number-input"
              label="Zip Code"
              aria="zipCode"
              register={register('zipCode', { required: true })}
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
