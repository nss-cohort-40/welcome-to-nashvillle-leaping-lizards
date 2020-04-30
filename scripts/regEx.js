// Dont Look In Here
function regEx(value) {
      let dog = /[dog]{3}/gi;
      let baseball = /[base]{4}|[sports]{4}/gi;
      let playground = /[play]{3}|[park]{3}/gi;
      let nature_center = /[natu]{4}/gi;
      let community_center = /[comm]{4}/gi;
      let ada_accessible = /[ada_]{4}/gi;
      let basketball = /[bask]{4}|[sports]{4}/gi;
      let restrooms = /[rest]{4}/gi;
      let picnic = /[picn]{4}/gi;
      let disc_golf = /[disc]{4}/gi;
      let skate_park = /[skate]{5}/gi;
      let hiking = /[hiking]{3}/gi;
      let horse = /[horse]{4}/gi;
      let jog = /[jog]{3}|[walk]{4}/gi;
      let swimming = /[swimming]{4}/gi;
      let lake = /[lake]{3}/gi;
      let community_garden = /[gard]{3}/gi;
      let history = /[hist]{4}/gi;
      let mtn_bike = /[mountain]{4}|[bike]{4}}/gi;
      if (dog.test(value)){
        return "dog_park=Yes"
      } else if (baseball.test(value)){
        return "baseball_fields=Yes"
      } else if (playground.test(value)){
        return "playground=Yes"
      } else if (nature_center.test(value)){
        return "nature_center=Yes"
      } else if (community_center.test(value)){
        return "community_center=Yes"
      } else if (ada_accessible.test(value)){
        return "ada_accessible=Yes"
      } else if (restrooms.test(value)){
        return "restrooms=Yes"
      } else if (picnic.test(value)){
        return "picnic_shelters=Yes"
      } else if (basketball.test(value)){
        return `basketball_courts=Yes`
      } else if (disc_golf.test(value)){
        return "disc_golf=Yes"
      } else if (skate_park.test(value)){
        return `skate_park=Yes`
      } else if (hiking.test(value)){
        return "hiking_trails=Yes"
      } else if (horse.test(value)){
        return `horse_trails=Yes`
      } else if (jog.test(value)){
        return `walk_jog_paths=Yes`
      } else if (swimming.test(value)){
        return "swimming_pool=Yes"
      } else if (lake.test(value)){
        return `lake=Yes`
      } else if (community_garden.test(value)){
        return "community_garden=Yes"
      } else if (history.test(value)){
        return `historic_features=Yes`
      } else if (mtn_bike.test(value)){
        return `mountain_bike_trails=Yes`
      } else {
        return 1
      }
    }