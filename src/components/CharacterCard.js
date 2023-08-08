import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useFetch from "../hooks/useFetch";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const CharacterCard = ({ character }) => {
  const imgsrc = `https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg`;

  const { error, isPending, data: episode } = useFetch(character.episode[0]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="max-w rounded-xl overflow-hidden shadow-xl flex flex-col sm:flex-row sm:h-[170px] sm:w-[550px] md:h-[170px] md:w-[550px] xl:w-[600px] xl:h-[220px] lg:h-[170px] lg:w-[550px]">
      <LazyLoadImage src={imgsrc} alt="Image Alt" onClick={handleClickOpen} />
      <div className="px-6 py-4 flex flex-col justify-between">
        <div className="font-bold text-sm mb-2">{character.name}</div>
        <div className="flex w-full items-center">
          {character.status === "Dead" && (
            <img
              src="https://img.icons8.com/ios-filled/50/ff0000/filled-circle.png"
              alt="filled-circle"
              className="mr-2 w-4 h-4"
            />
          )}
          {character.status === "Alive" && (
            <img
              src="https://img.icons8.com/ios-filled/50/00ff16/filled-circle.png"
              alt="filled-circle"
              className="mr-2 w-4 h-4"
            />
          )}
          {character.status === "unknown" && (
            <img
              src="https://img.icons8.com/ios-filled/50/555555/filled-circle.png"
              alt="filled-circle"
              className="mr-2 w-4 h-4"
            />
          )}
          <p className="text-md font-semibold">
            {character.status} - {character.species}
          </p>
        </div>
        <p className="font-semibold text-md">
          Last Seen: {character.origin.name}
        </p>
        <p className="font-semibold text-md">
          First Seen In:{isPending} {error} {episode && episode.name}
        </p>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth="md"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="rounded-xl"
      >
        <DialogTitle id="alert-dialog-title" className="text-xl font-bold">
          {character.name}
        </DialogTitle>

        <DialogContent>
          <LazyLoadImage src={imgsrc} alt="Image Alt" />
        </DialogContent>

        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className="flex items-center"
          >
            {character.status === "Dead" && (
              <img
                src="https://img.icons8.com/ios-filled/50/ff0000/filled-circle.png"
                alt="filled-circle"
                className="mr-2 w-4 h-4"
              />
            )}
            {character.status === "Alive" && (
              <img
                src="https://img.icons8.com/ios-filled/50/00ff16/filled-circle.png"
                alt="filled-circle"
                className="mr-2 w-4 h-4"
              />
            )}
            {character.status === "unknown" && (
              <img
                src="https://img.icons8.com/ios-filled/50/555555/filled-circle.png"
                alt="filled-circle"
                className="mr-2 w-4 h-4"
              />
            )}
            <p className="text-md font-semibold">
              {character.status} - {character.species}
            </p>
          </DialogContentText>
          <DialogContentText>
            <p className="text-md font-semibold">
              Type: {character.type || "N/A"}
            </p>
            <p className="font-semibold text-md">
              Last Seen: {character.origin.name}
            </p>
            <p className="font-semibold text-md">
              First Seen In:{episode && episode.name}
            </p>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CharacterCard;
