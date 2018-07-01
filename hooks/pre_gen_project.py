import os
import shutil

# Get the root project directory
PROJECT_DIRECTORY = os.path.realpath(os.path.curdir)


def add_tilda(project_directory, file_name):
    """Add tilda to files so they are not overriden."""
    current_location = os.path.join(
        project_directory,
        file_name
    )
    new_location = os.path.join(
        project_directory,
        '~{}'.format(file_name)
    )
    if os.path.isfile(current_location):
        shutil.move(current_location, new_location)
