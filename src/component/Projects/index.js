import React from "react";
import "../App/App.css";
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ProjectList from './ProjectList';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import Paper from '@material-ui/core/Paper';
import { openSource } from '../Data/';

const GITHUB_BASE_URL = 'https://api.github.com/graphql';

const httpLink = new HttpLink({
	uri: GITHUB_BASE_URL,
	headers: {
		Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
	},
});

const cache = new InMemoryCache();
const client = new ApolloClient({
	link: httpLink,
	cache,

});


const GET_REPOSITORIES = gql`
  {
    user(login: "${openSource.githubUserName}") {
    url
    pinnedItems(first: 6, types: [REPOSITORY]) {
      edges {
        node {
          ... on Repository {
            id
            name
            url
            description
            repositoryTopics(first: 10) {
              nodes {
                topic {
                  name
                }
              }
            }
            stargazers {
              totalCount
            }
            forkCount
            diskUsage
            homepageUrl
            viewerHasStarred
            watchers {
              totalCount
            }
          }
        }
      }
    }
  }  
  }
`;


class Projects extends React.Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<Query query={GET_REPOSITORIES}>
					{({ data, loading, error }) => {
						if (error || loading || !data) {
							return (
								<div style={{ padding: '0.8% 6%' }}>
									<Typography component="p" style={{ paddingTop: "30px", paddingBottom: "15px", fontFamily: '"Baloo Tamma 2", "cursive"', fontSize: "3rem", fontWeight: "600", color: "#81049B" }}>Projects<span role="img" aria-label="rocket">🚀</span></Typography>
									<Grid container spacing={5}>
										<Grid item xs={12} sm={12} md={6}>
											{openSource.githubConvertedToken}
											<Paper elevation={3} p={3}>
												<Box
													display="flex"
													flexWrap="nowrap"
												>
													<Skeleton animation="wave" variant="circle" width={40} height={40} style={{ margin: "18px 25px" }} />
													<Skeleton animation="wave" height={15} width="60%" style={{ marginTop: 28 }} />
												</Box>
												<Box px={5} py={1}>
													<Skeleton animation="wave" height={16} width="92%" style={{ marginBottom: 6 }} />
													<Skeleton animation="wave" height={16} width="78%" style={{ marginBottom: 6 }} />
													<Skeleton animation="wave" height={16} width="60%" style={{ marginBottom: 6 }} />
												</Box>

												<Box px={4} display="flex" flexWrap="nowrap">
													<Skeleton animation="wave" height={35} width="15%" style={{ marginBottom: 6, margin: "0px 7px" }} />
													<Skeleton animation="wave" height={35} width="15%" style={{ marginBottom: 6, margin: "0px 7px" }} />
													<Skeleton animation="wave" height={35} width="15%" style={{ marginBottom: 6, margin: "0px 7px" }} />
													<Skeleton animation="wave" height={35} width="15%" style={{ marginBottom: 6, margin: "0px 7px" }} />
												</Box>

												<Box display="flex" justifyContent="flex-end" py={3} pr={2}>
													<Skeleton animation="wave" height={15} width="30%" style={{ marginBottom: 6 }} />
												</Box>
											</Paper>
										</Grid>
										<Grid item xs={12} sm={12} md={6}>
											<Paper elevation={3} p={3}>
												<Box
													display="flex"
													flexWrap="nowrap"
												>
													<Skeleton animation="wave" variant="circle" width={40} height={40} style={{ margin: "18px 25px" }} />
													<Skeleton animation="wave" height={15} width="60%" style={{ marginTop: 28 }} />
												</Box>
												<Box px={5} py={1}>
													<Skeleton animation="wave" height={16} width="92%" style={{ marginBottom: 6 }} />
													<Skeleton animation="wave" height={16} width="78%" style={{ marginBottom: 6 }} />
													<Skeleton animation="wave" height={16} width="60%" style={{ marginBottom: 6 }} />
												</Box>

												<Box px={4} display="flex" flexWrap="nowrap">
													<Skeleton animation="wave" height={35} width="15%" style={{ marginBottom: 6, margin: "0px 7px" }} />
													<Skeleton animation="wave" height={35} width="15%" style={{ marginBottom: 6, margin: "0px 7px" }} />
													<Skeleton animation="wave" height={35} width="15%" style={{ marginBottom: 6, margin: "0px 7px" }} />
													<Skeleton animation="wave" height={35} width="15%" style={{ marginBottom: 6, margin: "0px 7px" }} />
												</Box>

												<Box display="flex" justifyContent="flex-end" py={3} pr={2}>
													<Skeleton animation="wave" height={15} width="30%" style={{ marginBottom: 6 }} />
												</Box>
											</Paper>
										</Grid>
										{/*<small>error.toString()</small>*/}
										{error && <Typography style={{ margin: "0 auto", fontSize: "1.3rem", paddingBottom: "10px" }}>Oops!! Some Error Occured</Typography>}
									</Grid>
								</div>
							);
						}

						return <ProjectList user={data.user} />;
					}}
				</Query>
			</ApolloProvider>
		);
	}
}

export default Projects;