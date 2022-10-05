import * as moment from 'moment';

export class DateTimeFormat {
  public static readonly JourMoisAnnee: string = 'DD/MM/YYYY';
  public static readonly AnneeMoisJour: string = 'YYYY-MM-DD';
  public static readonly HeureMinute: string = 'HH:mm';
  public static readonly ISO_HTTP: string = 'YYYY-MM-DD[T]HH:mm:ss';
}

function formatJourMoisAnnee(date: Date | string): string {
  return moment(date).format(DateTimeFormat.JourMoisAnnee);
}

function formatAnneeMoisJour(date: Date | string): string {
  return moment(date).format(DateTimeFormat.AnneeMoisJour);
}

function formatHeureMinute(date: Date | string): string {
  return moment(date).format(DateTimeFormat.HeureMinute);
}

function formatIsoHttp(date: Date | string, heure?: string): string {
  const dateHeure = heure ? formatAnneeMoisJour(date) + ' ' + heure : date;
  return moment(dateHeure).format(DateTimeFormat.ISO_HTTP);
}

function isHoursOnDate(date: Date): boolean {
  return moment(date).hour() > 0;
}

export { formatJourMoisAnnee, formatHeureMinute, formatIsoHttp, isHoursOnDate };
