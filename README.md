# Weather Dashboard

## Descripton

A weather app that will show show current weather and five day forecast when the user
types the name of the city in the search bar.

In the HTML, I set up the imput field and the submit button for user input. I also
create 6 divs with one showing the current weather. It would show the name of the city,
the temperature, wind speed and humidity. The other five divs would show the same infomation
only it would be the next five days. 

In the Javascript, I created a function getForecast to grap the data from the API URL, which
would retrive the city that was input by the user by using the fetch method. Then the fucntion
displayForecast would take the data objects from the API and through the inner.Text method 
would print to the card on the screen.

I used the daysjs method to print the current day to the screen. I am not sure why this
was unsuccessful, as I made this work in the acitvites using the same code.

In order to get the next five days of forecast, I believe I would need to loop through the
data again use the inner.Text method. I have not been able to figure this out.

I tried to use similar code that we did in an activity to print the search history of the
city imput, but I was unable to make it work.

The website has minimal CSS, as I made it the lowest priority, and I ran out of time.

### Deployed Application

https://brachtco.github.io/weather-dashboard/

### Screenshot

![Screen Shot 2022-12-05 at 4 43 54 PM](https://user-images.githubusercontent.com/17559972/205771605-45bc0f7a-3f57-4309-8646-8786c64f0fd5.png)

