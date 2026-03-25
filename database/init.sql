-- PostgreSQL and PostGIS setup code

CREATE EXTENSION postgis;
CREATE EXTENSION postgis_topology;

-- Example tables and data for testing
CREATE TABLE locations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    geom GEOMETRY(Point, 4326)
);

INSERT INTO locations (name, geom) VALUES
('Location A', ST_SetSRID(ST_MakePoint(-122.431297, 37.773972), 4326)),
('Location B', ST_SetSRID(ST_MakePoint(-73.935242, 40.730610), 4326));