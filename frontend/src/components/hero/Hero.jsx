import 'swiper/css'
import 'swiper/css/navigation'
import './Hero.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { Paper } from '@mui/material'
import React from 'react'

const Hero = ({ movies = [] }) => {
  return (
    <Swiper modules={[Navigation]} navigation spaceBetween={16} slidesPerView={1} loop>
      {movies.map((movie, i) => (
        <SwiperSlide key={movie?.imdbId || movie?.id || i}>
          <Paper sx={{ p: 2 }}>
            <div className="movie-card-container">
              <div className="movie-card">
                <div className="movie-detail">
                  <div className="movie-poster">
                    <img
                      src={movie?.poster || '/placeholder.jpg'}
                      alt={movie?.title || 'Movie'}
                      style={{ width: 'auto', height: 'auto', display: 'block' }}
                    />
                  </div>
                  <div className="movie-title">
                    <h4>{movie?.title || 'Untitled'}</h4>
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Hero
