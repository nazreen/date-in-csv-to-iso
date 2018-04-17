reads a csv file and converts all dates to ISO

# Prerequisites
1. Dates are in `YYYY-MM-DD` format.
2. Date is under a column called 'date'.

How to use:
1. Copy csv file to parse into `/data` folder under root folder. Name it `raw.csv`.
2. Run 'npm start'.
3. Locate the output at `/data/result.csv`.

# TODO
- accept dates in all formats
- enable specification of column(s) with the date variable.