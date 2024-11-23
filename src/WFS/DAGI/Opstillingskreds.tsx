import { type CRS, type LatLng } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { EPSG25832 } from '../../util';
import { GenericDagiArea } from './dagi-types';
import { DagiArea } from './DagiArea';
import { UsernameAndPassword } from '../../shared/types';

export type OpstillingskredsProps = Readonly<{
  token?: string;
  usernameAndPassword?: UsernameAndPassword;
  crs?: typeof CRS.EPSG3395 | typeof CRS.EPSG3857 | typeof CRS.EPSG4326 | typeof EPSG25832 | CRS;
  version?: string;
}>


export type DagiAfstemningsomraade = {
  'dagi:afstemningsomraadenummer': number,
  'dagi:afstemningsstedNavn': string,
} & GenericDagiArea;
export type GenericArea = {polygons: LatLng[][], id: number | string};

export function Opstillingskreds({ token, usernameAndPassword }: OpstillingskredsProps) {
  return <DagiArea token={token} usernameAndPassword={usernameAndPassword} typename='Opstillingskreds' fetchWithinViewport={true}></DagiArea>
}