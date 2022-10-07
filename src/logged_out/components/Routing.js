import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import PropsRoute from "../../shared/components/PropsRoute";
import Home from "./home/Home";
import Services from "./services/Services";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import PrivacyPolicy from "./privacypolicy/PrivacyPolicy";
import Contact from "./contact/Contact";
import PortfolioData from "./portfolio/PortfolioData";
import useLocationBlocker from "../../shared/functions/useLocationBlocker";

function Routing(props) {
  const { blogPosts, selectPortfolio, selectHome, selectAbout, selectServices, selectPrivacyPolicy, selectContact } = props;

  useLocationBlocker(); 
  return (
    <Switch>
      {blogPosts.map((post) => (
        <PropsRoute
          path={post.url}
          component={PortfolioData}
          title={post.title}
          key={post.title}
          src={post.src}
          date={post.date}
          content={post.content}
          otherArticles={blogPosts.filter(
            (blogPost) => blogPost.id !== post.id
          )}
        />
      ))}
      

      <PropsRoute
        exact
        path="/contact"
        component={Contact}
        selectContact={selectContact}
      />
      <PropsRoute
        exact
        path="/privacypolicy"
        component={PrivacyPolicy}
        selectPrivacyPolicy={selectPrivacyPolicy}
      />
      
      <PropsRoute
        exact
        path="/portfolio"
        component={Portfolio}
        selectPortfolio={selectPortfolio}
        portfolioPosts={blogPosts}
      />

      <PropsRoute
        exact
        path="/services"
        component={Services}
        selectServices={selectServices}
      />

      <PropsRoute
        exact
        path="/about"
        component={About}
        selectAbout={selectAbout}
        render={(props) => <About {...props} title={`Props through render`} />}
      />
      
      <PropsRoute path="/" component={Home} selectHome={selectHome} />

    </Switch>
  );
}

Routing.propTypes = {
  blogposts: PropTypes.arrayOf(PropTypes.object),
  selectHome: PropTypes.func.isRequired,
  selectPrivacyPolicy: PropTypes.func.isRequired,
  selectContact: PropTypes.func.isRequired,
  selectPortfolio: PropTypes.func.isRequired,
  selectServices:PropTypes.func.isRequired,
  selectAbout: PropTypes.func.isRequired,
};

export default memo(Routing);
