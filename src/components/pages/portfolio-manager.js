import React, {Component} from "react";
import axios from "axios";


class PortfolioManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolioItems: []
        }

        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    }

    getPortfolioItems() {
        axios.get("https://haydenccarroll.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc", {withCredentials:true})
        .then(response => {
            this.setState({
                portfolioItems: [...response.data.portfolio_items]
            });
        }).catch(error => {
            console.log("Error in getPortfolioItems for portfolio-manager", error);
        });
    }


    handleSuccessfulFormSubmission(portfolioItem) {
        this.setState({
            portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
        });
    }

    handleFormSubmissionError(error) {
        console.log("There was an error submitting the form", error);
    }


    componentDidMount() {
        this.getPortfolioItems();
    }
    render() { 
        return ( 
            <div className="portfolio-manager-wrapper">
                PORTFOLIO MANAGER
            </div>
         );
    }
}
 
export default PortfolioManager;