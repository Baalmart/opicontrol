# opicontrol


# Project Title

This is an application that is composed of 3 use cases:

#### check-discharge

This use case allows an actor to calculate the highest averages between any 2 contigus elements
within an array of discharge rates.

#### check-booking

This use case allows an actor to be able to check for the availability of a bike, given an array of 
bookings. Useful for the electric bike booking service.

#### check-mode

This use case provides the functionality that enables the vehicles to switch driving modes. The 
driving modes under consideration are:

- Sport
- Eco
- Off-road

## Organizational Structure

The application utilises the MVC design pattern where the Controllers, Views and Models
are kept in separate directories which are named accordingly.

There is also a docs directory which stores the UMLs for the different use cases.




## Run Locally

Clone the project

```bash
  git clone https://github.com/Baalmart/opicontrol
```

Go to the project directory

```bash
  cd opicontrol
  cd utils
```

Run the discharge utility

```bash
  node discharge.js
```

Run the booking utility

```bash
  node booking.js
```

Checkout the DriverControl utility

```bash
  vi mode.js
```

