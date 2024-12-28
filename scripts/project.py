import json
import adsk.core

def save_fusion_data(): 
    app = adsk.corrre.Application.get()
    project = app.data.activeProject

    data = {
        "project_name"  : project if project else None
    }
    with open("C:/Users/tuo_utente/Documents/fusion_data.json", "w") as file:
        json.dump(data, file)
save_fusion_data