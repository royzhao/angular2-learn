import {Injectable} from 'angular2/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {
	getHeroes(){
		return Promise.resolve(HEROES);
	}
	getHeroById(id:number|string){
		return this.getHeroes()
			.then(heroes => heroes.filter(h => h.id === +id)[0]);
	}
	getHeroesSlowly(){
		return new Promise<Hero[]>(resolve=>
			setTimeout(()=>resolve(HEROES),2000));
	}
}