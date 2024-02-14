import { MASTER_URL } from '@env';
import { request, gql } from 'graphql-request'

const masterUrl = (MASTER_URL).trim();

const getSlider=async ()=>{
  const query = gql`
  query getSlider {
    sliders {
      id
      name
      image {
        url
      }
    }
  }
  `
const result = await request(masterUrl, query);
return result
}

export default {
  getSlider,
}
