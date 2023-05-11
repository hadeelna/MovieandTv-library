const axios = require('axios')

exports.getmovieByName = async (req, res) => {
    try {
        if (!process.env.TMDB_STATIC_PARAMS || !process.env.TMDB_URL) {
            return res.status(500).send({ massege: "Cannot access tmdb" })
        }
        const url = `${process.env.TMDB_URL}/search/movie?query=${req.params.name}&${process.env.TMDB_STATIC_PARAMS}`
        const response = await axios.get(url);
        if (response.data.results && response.data.results.length > 0) {
            let promises = [];
            let movie_list = new Array();
            response.data.results.map((result) => {
                promises.push(this.getmovieById(result.id))
            })
            const promisesRes = await Promise.all(promises);
            promisesRes.forEach(promisesRes => {
                if (!promisesRes.massege) {
                    //cal a halper function here to minimize to result
                    movie_list.push(promisesRes);
                }
                if (movie_list.length == 0) {
                    return res.status(400).send({ message: "problem!!" })

                }
            });
            res.send(movie_list);
        } else {
            res.status(200).send({ message: "no movies found" })
        }
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}


exports.getpouplar = async (req, res) => {
    try {
        const url = `${process.env.TMDB_URL}/movie/popular?${process.env.TMDB_STATIC_PARAMS}`
        console.log(url);
        const response = await axios.get(url);
        if (response.data.results.length > 0) {      
            res.send(response.data);
        } else {
            res.status(200).send({ message: "no popular found" })
        }
    } catch (err) {
        res.status(500).send({ message: "no found" })

    }
}
exports.getlatest = async (req, res) => {
    try {
        const url = `${process.env.TMDB_URL}/movie/latest?${process.env.TMDB_STATIC_PARAMS}`
        console.log(url);
        const response = await axios.get(url);
        console.log(response.data)
        if (!response.ok) {
            console.log("hi from if in getlatest")
            res.send(response.data);
        } else {
            res.status(200).send({ message: " found" })
        }
    } catch (err) {
        res.status(500).send({ message: "no found" })

    }
}


exports.getmovieById = async (id) => {
    try {
        const url = `${process.env.TMDB_URL}/movie/${id}?${process.env.TMDB_STATIC_PARAMS}`
        const response = await axios.get(url);
        const minimizadRes = {};
        minimizadRes.release_date = response.release_date;
        return response.data;
    } catch (err) {
        return { message: "Troubles retrieving movie" }
    }
}





exports.getTvByName = async (req, res) => {
    try {
        if (!process.env.TMDB_STATIC_PARAMS || !process.env.TMDB_URL) {
            return res.status(500).send({ massege: "Cannot access tmdb" })
        }
        const url = `${process.env.TMDB_URL}/search/tv?query=${req.params.name}&${process.env.TMDB_STATIC_PARAMS}`
        const response = await axios.get(url);
        if (!response.ok) {
            console.log("hi from if in getlatest")
            res.send(response.data);
        } else {
            res.status(200).send({ message: " found" })
        }
    } catch (err) {
        res.status(500).send({ message: "no found" })

    }
}

exports.getCast = async (req, res) => {
    try {
        const url = `${process.env.TMDB_URL}/movie/${req.params.id}/credits?${process.env.TMDB_STATIC_PARAMS}`
        console.log(url);
        const response = await axios.get(url);
        if (response.data) {     
            res.send(response.data);
        } else {
            res.status(200).send({ message: "no popular found" })
        }
    } catch (err) {
    res.status(500).send({ message: "no found" })

    }
}
exports.getCasttv = async (req, res) => {
    try {
        const url = `${process.env.TMDB_URL}/tv/${req.params.id}/credits?${process.env.TMDB_STATIC_PARAMS}`
        console.log(url);
        const response = await axios.get(url);
        if (response.data) {     
            res.send(response.data);
        } else {
            res.status(200).send({ message: "no popular found" })
        }
    } catch (err) {
    res.status(500).send({ message: "no found" })

    }
}
exports.getsimilar = async (req, res) => {
    try {
        const url = `${process.env.TMDB_URL}/movie/${req.params.id}/similar?${process.env.TMDB_STATIC_PARAMS}`
        console.log(url);
        const response = await axios.get(url);
        if (response.data) {     
            res.send(response.data);
        } else {
            res.status(200).send({ message: "no popular found" })
        }
    } catch (err) {
    res.status(500).send({ message: "no found" })

    }
}