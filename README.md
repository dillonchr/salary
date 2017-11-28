## Usage
You'll need to create a file at `public/jobs.json`. There is where you will load your data. It needs to be structured like this:
```javascript
[
  {
    "company": "Walmart", //  company name
    "position": "Cart Pusher", // position title
    "wage": 6.25, //  hourly wage
    "salary": 13250, // OR yearly salary
    "months": 6, // number of months in position
    "since": "4/2007" //  OR start date (for current positions)
  }
  // etc...
]
```

It's very basic and doesn't have the feng shui I want yet. But this was a 3 year old jQuery project that's been brought back to life so I'll take it as it comes.
