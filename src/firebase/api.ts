import { doc, getDoc, setDoc } from "firebase/firestore";
import { IDoctor } from "@/types/IDoctor";
import { firestore, collectionName, collectionFiles } from ".";

interface DoctorsData {
  doctors: IDoctor[];
}

export const fetchDoctors = async (): Promise<IDoctor[]> => {
  const response = await getDoc(doc(firestore, collectionName, collectionFiles.doctors));
  const { doctors } = response.data() as DoctorsData;
  return doctors;
};

export const sendDoctors = async (doctors: IDoctor[]) => {
  await setDoc(doc(firestore, collectionName, collectionFiles.doctors), { doctors });
};
