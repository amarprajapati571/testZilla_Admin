import React, { Component } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Privacy from "../Modules/StaticPages/Privacy";
import Terms from "../Modules/StaticPages/Terms";
import Sidebar from "../Modules/Sidebar";
import TopNav from "../Modules/TopNav";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export class StaticPages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  handleChange(event, newValue) {
    console.log(newValue);
    this.setState({ value: newValue });
  }
  render() {
    return (
      <>
        <div className="layout-wrapper layout-2">
          <div className="layout-inner">
            <Sidebar />
            <div className="layout-container">
              <TopNav />
              <div className="layout-content">
                <div className="container-fluid flex-grow-1 container-p-y">
                  <div class="layout-content">
                    <div class="container-fluid flex-grow-1 container-p-y card-body">
                      <h4 class="font-weight-bold py-3 mb-0">Static Pages</h4>
                      <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
                        <ol class="breadcrumb">
                          <li class="breadcrumb-item">
                            <a href="#">
                              <i class="feather icon-home"></i>
                            </a>
                          </li>
                          <li class="breadcrumb-item">Static Pages</li>
                        </ol>
                      </div>
                      <Box sx={{ width: "100%" }}>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                          <Tabs
                            value={this.state.value}
                            onChange={this.handleChange.bind(this)}
                            aria-label="basic tabs example"
                          >
                            <Tab label="Terms & Conditions" {...a11yProps(0)} />
                            <Tab
                              label="Privacy and Policies "
                              {...a11yProps(1)}
                            />
                          </Tabs>
                        </Box>
                        <TabPanel value={this.state.value} index={0}>
                          <Terms />
                        </TabPanel>
                        <TabPanel value={this.state.value} index={1}>
                          <Privacy />
                        </TabPanel>
                      </Box>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
