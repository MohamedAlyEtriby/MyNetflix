const ApiKey = "f4d9f3aad66878631c18ae5c74c36d73";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${ApiKey}&language=en-US`,
  fetchNetflixoriginal: `/discover/tv?api_key=${ApiKey}&with_networks=213`,
  fetchtopRated: `/movie/top_rated?api_key=${ApiKey}&language=en-US`,
  fetchaction: `/discover/tv?api_key=${ApiKey}&with_generes=12`,
  fetchcomedy: `/discover/tv?api_key=${ApiKey}&with_generes=35`,
  fetchhorror: `/discover/tv?api_key=${ApiKey}&with_generes=27`,
  fetchromance: `/discover/tv?api_key=${ApiKey}&with_generes=10749`,
  fetchdocumentaries: `/discover/tv?api_key=${ApiKey}&with_generes=99`,
};
export default requests;
