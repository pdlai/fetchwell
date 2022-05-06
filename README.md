# Fetchwell
Fetchwell is a full-stack, React/Redux app intended to be a clone of [Madewell](https://www.madewell.com/) online shopping site

**Live Link:** [Fetchwell](https://fetchwell.herokuapp.com/#/)
<br>
<br>
<p align="center">
  <img src="https://github.com/pdlai/fetchwell/blob/main/fetchwell_demo_large.gif" alt="fetchwell-gif"></a></img>
</p>

## Features
### Products Filtering and Persist on Refresh
![Filter Refresh]()

Users may browse products that are filtered by category. The nav-bar shows different categories and will filter and redirect accordingly. Upon refresh.sd.fsf
```javascript
componentDidMount(){
    this.path = this.props.location.pathname;
    let queries = this.path.split("/");
    if( queries[1] === 'womens'){
        this.props.updateFilters({
            gender: queries[1],
            category: queries[2],
        })
    }
}
 ```
### Reviews

## Technologies Used
* Ruby on Rails
* React / Redux
* JavaScript / jQuery / JBuilder
* PostgreSQL
* HTML, CSS
* AWS S3
* Heroku

